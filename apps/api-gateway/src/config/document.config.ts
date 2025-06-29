import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import type { INestApplication } from "@nestjs/common";
import type { OpenAPIObject } from "@nestjs/swagger";

interface MicroserviceConfig {
  name: string;
  url: string;
  prefix: string;
}

const services: MicroserviceConfig[] = [
  {
    name: "API Service",
    url: process.env.API_URL ?? "http://localhost:3001/api-json",
    prefix: "/schedule",
  },
  {
    name: "Auth Service",
    url: process.env.AUTH_API_URL ?? "http://localhost:3002/api-json",
    prefix: "/auth",
  },
  {
    name: "Notification Service",
    url: process.env.NOTIFICATION_API_URL ?? "http://localhost:3003/api-json",
    prefix: "/notification",
  },
];

export async function setupSwagger(app: INestApplication): Promise<void> {
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
      const response = await fetch(service.url);
      const serviceDoc = (await response.json()) as OpenAPIObject;

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
}
