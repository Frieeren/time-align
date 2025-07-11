import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupSwagger } from "./config/document.config";
import { CommonResponseInterceptor } from "./interceptors/response.interceptor";

// https://docs.nestjs.com/recipes/hot-reload#hot-module-replacement
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwagger(app);

  app.useGlobalInterceptors(new CommonResponseInterceptor());
  await app.listen(process.env.PORT ?? 3001);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
