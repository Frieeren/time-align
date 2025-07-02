import fs from "node:fs";
import path from "node:path";
import type { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import type { OpenAPIObject } from "@nestjs/swagger";

interface MicroserviceConfig {
  name: string;
  filePath: string;
  prefix: string;
}

const services: MicroserviceConfig[] = [
  {
    name: "API Service",
    filePath: "docs/api.json",
    prefix: "/schedule",
  },
  {
    name: "Auth Service",
    filePath: "docs/auth-api.json",
    prefix: "/auth",
  },
  {
    name: "Notification Service",
    filePath: "docs/notification-api.json",
    prefix: "/notification",
  },
];

export async function setupSwagger(app: INestApplication): Promise<OpenAPIObject> {
  const config = new DocumentBuilder()
    .setTitle("Time-Align API")
    .setDescription("API Gateway")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const baseDocument = SwaggerModule.createDocument(app, config);
  const document: OpenAPIObject = {
    ...baseDocument,
    paths: { ...baseDocument.paths },
    components: { ...baseDocument.components },
  };

  for (const service of services) {
    try {
      const filePath = path.join(process.cwd(), "..", "..", service.filePath);
      const serviceDoc = JSON.parse(fs.readFileSync(filePath, "utf8")) as OpenAPIObject;

      if (serviceDoc.paths) {
        const prefixedPaths = {};
        for (const [path, pathItem] of Object.entries(serviceDoc.paths)) {
          prefixedPaths[service.prefix + path] = pathItem;
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
  });

  return document;
}
