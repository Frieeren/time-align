import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDateString, IsEnum, IsNumber, IsOptional, Min } from "class-validator";
import { CommonPaginatedResponseDto, PaginatedData } from "../../dto/response.dto";
import { ScheduleStatus } from "../../entities/schedule.entity";
import { ScheduleDto } from "./schedule.dto";

export class QueryScheduleRequestDto {
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

export class QueryScheduleResponseDto extends CommonPaginatedResponseDto<ScheduleDto> {}
