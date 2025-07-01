import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "../app.module";

async function generateSwagger() {
  const app = await NestFactory.create(AppModule, { logger: false });

  const config = new DocumentBuilder()
    .setTitle("API Gateway")
    .setDescription("API Gateway for Checkmate application")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const outputPath = join(process.cwd(), "..", "..", "docs", "api-docs.json");
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  console.log(`Swagger JSON generated at: ${outputPath}`);

  await app.close();
}

generateSwagger().catch(error => {
  console.error("Error generating Swagger:", error);
  process.exit(1);
});
