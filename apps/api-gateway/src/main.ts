import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "./config/document.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);

  console.log(`🚀 API Gateway 서버 시작: http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`📚 API 문서: http://localhost:${process.env.PORT ?? 3000}/api-docs`);
  console.log(`📄 JSON 스키마: http://localhost:${process.env.PORT ?? 3000}/api-json`);
}
bootstrap();
