import { type MiddlewareConsumer, Module, type NestModule } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import appConfig from "./config/app.config";
import dbConfig from "./config/db.config";
import { Schedule } from "./entities/schedule.entity";
import { ScheduleParticipant } from "./entities/scheduleParticipants.entity";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { SchedulesModule } from "./schedules/schedules.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, dbConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get<string>("database.type") as "mysql" | "sqlite",
          host: configService.get<string>("database.host"),
          port: configService.get<number>("database.port"),
          username: configService.get<string>("database.username"),
          password: configService.get<string>("database.password"),
          database: configService.get<string>("database.database"),
          entities: [Schedule, ScheduleParticipant],
          synchronize: configService.get<string>("app.env") === "development",
          logging: configService.get<string>("app.env") === "development",
        };
      },
      inject: [ConfigService],
    }),
    SchedulesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
