import { writeFileSync } from "node:fs";
import path from "node:path";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { setupSwagger } from "../config/document.config";

async function generateSwagger() {
  const app = await NestFactory.create(AppModule, { logger: false, abortOnError: false });

  const document = await setupSwagger(app);

  const outputPath = path.join(process.cwd(), "..", "..", "docs", "api.json");
  writeFileSync(outputPath, JSON.stringify(document, null, 2));

  console.log(`Swagger JSON generated at: ${outputPath}`);

  await app.close();
}

generateSwagger().catch(error => {
  console.error("Error generating Swagger:", error);
  process.exit(1);
});
