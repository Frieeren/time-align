import { Transform } from "class-transformer";
import { IsDateString, IsEnum, IsNumber, IsOptional, Min } from "class-validator";
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
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @Min(1)
  size?: number = 20;
}
