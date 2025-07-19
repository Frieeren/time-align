import { ApiProperty } from "@nestjs/swagger";
import { CommonResponseDto } from "../../dto/response.dto";
import { ScheduleDto } from "./schedule.dto";

export class DetailScheduleResponseDto extends CommonResponseDto<ScheduleDto> {
  @ApiProperty({ type: ScheduleDto })
  data?: ScheduleDto = undefined;
}
