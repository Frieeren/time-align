import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// https://docs.nestjs.com/recipes/hot-reload#hot-module-replacement
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
