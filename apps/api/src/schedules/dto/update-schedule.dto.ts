import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CommonResponseDto } from "../../dto/response.dto";
import { CreateScheduleRequestDto } from "./create-schedule.dto";
import { ScheduleDto } from "./schedule.dto";

export class UpdateScheduleRequestDto extends PartialType(CreateScheduleRequestDto) {}

export class UpdateScheduleResponseDto extends CommonResponseDto<ScheduleDto> {
  @ApiProperty({ type: ScheduleDto })
  data?: ScheduleDto = undefined;
}
