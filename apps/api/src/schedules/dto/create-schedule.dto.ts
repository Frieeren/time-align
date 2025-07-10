import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CommonResponseDto } from "../../dto/response.dto";
import { ScheduleDto } from "./schedule.dto";

export class CreateScheduleRequestDto extends OmitType(ScheduleDto, ["id"] as const) {}

export class CreateScheduleResponseDto extends CommonResponseDto<ScheduleDto> {
  @ApiProperty({ type: ScheduleDto })
  data?: ScheduleDto = undefined;
}
