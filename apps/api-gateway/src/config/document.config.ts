import fs from "node:fs";
import path from "node:path";
import type { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import type { OpenAPIObject } from "@nestjs/swagger";

interface MicroserviceConfig {
  name: string;
  filePath: string;
  prefix: string;
  authType: "gateway" | "bearer";
}

const services: MicroserviceConfig[] = [
  {
    name: "API Service",
    filePath: "docs/api.json",
    prefix: "/schedule",
    authType: "gateway",
  },
  {
    name: "Auth Service",
    filePath: "docs/auth-api.json",
    prefix: "/auth",
    authType: "bearer",
  },
  {
    name: "Notification Service",
    filePath: "docs/notification-api.json",
    prefix: "/notification",
    authType: "gateway",
  },
];

export async function setupSwagger(app: INestApplication): Promise<OpenAPIObject> {
  const config = new DocumentBuilder()
    .setTitle("Time-Align API")
    .setDescription("API Gateway")
    .setVersion("1.0")
    .addBearerAuth({
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
      name: "authorization",
      description: "JWT Bearer Token",
      in: "header",
    })
    .addApiKey({
      type: "apiKey",
      name: "x-user-id",
      in: "header",
      description: "User ID (API Gateway 인증 후 제공)",
    })
    .build();

  const baseDocument = SwaggerModule.createDocument(app, config);
  const document: OpenAPIObject = {
    ...baseDocument,
    paths: { ...baseDocument.paths },
    components: {
      ...baseDocument.components,
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        ApiGatewayAuth: {
          type: "apiKey",
          name: "x-user-id",
          in: "header",
        },
      },
    },
  };

  for (const service of services) {
    try {
      const filePath = path.join(process.cwd(), "..", "..", service.filePath);
      const serviceDoc = JSON.parse(fs.readFileSync(filePath, "utf8")) as OpenAPIObject;

      if (serviceDoc.paths) {
        const prefixedPaths = {};
        for (const [path, pathItem] of Object.entries(serviceDoc.paths)) {
          prefixedPaths[service.prefix + path] = pathItem;

          const updatedPathItem = { ...pathItem };

          for (const [method, operation] of Object.entries(updatedPathItem)) {
            if (typeof operation === "object" && operation !== null && "security" in operation) {
              const updatedOperation = { ...operation };
              if (service.authType === "bearer") {
                updatedOperation.security = [{ BearerAuth: [] }];
              }
              if (service.authType === "gateway") {
                updatedOperation.security = [{ ApiGatewayAuth: [] }];
              }

              updatedPathItem[method] = updatedOperation;
            }
          }

          prefixedPaths[service.prefix + path] = updatedPathItem;
        }

        document.paths = { ...document.paths, ...prefixedPaths };
      }

      if (serviceDoc.components?.schemas) {
        if (!document.components) {
          document.components = {};
        }

        document.components = {
          ...document.components,
          schemas: {
            ...document.components?.schemas,
            ...serviceDoc.components.schemas,
          },
        };
      }
    } catch (error) {
      console.warn(`❌ ${service.name} API Document 연결 실패`);
    }
  }

  SwaggerModule.setup("api-docs", app, document, {
    jsonDocumentUrl: "/api-json",
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  return document;
}
