import { Transform } from "class-transformer";
import { IsDateString, IsEnum, IsNumber, IsOptional } from "class-validator";
import { ScheduleStatus } from "../../entities/schedule.entity";

export class QueryScheduleDto {
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsEnum(ScheduleStatus)
  status?: ScheduleStatus;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  limit?: number = 20;
}
