import { PartialType } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { ScheduleStatus } from "../../entities/schedule.entity";
import { CreateScheduleDto } from "./create-schedule.dto";

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  startTime?: string;

  @IsOptional()
  @IsDateString()
  endTime?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsEnum(ScheduleStatus)
  status?: ScheduleStatus;

  @IsOptional()
  @IsBoolean()
  isAllDay?: boolean;
}
