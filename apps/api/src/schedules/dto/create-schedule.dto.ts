import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ScheduleStatus } from "../../entities/schedule.entity";

export class CreateScheduleDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  startTime!: string;

  @IsDateString()
  endTime!: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsEnum(ScheduleStatus)
  status?: ScheduleStatus;

  @IsOptional()
  @IsBoolean()
  isAllDay?: boolean;

  // 참여자 초대용 (userId 배열)
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @Type(() => Number)
  invitedUserIds?: number[];
}
