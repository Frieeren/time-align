import { ApiProperty } from "@nestjs/swagger";
import { ScheduleStatus } from "../../entities/schedule.entity";

export class ScheduleDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  startTime!: Date;

  @ApiProperty()
  endTime!: Date;

  @ApiProperty()
  location!: string;

  @ApiProperty()
  status!: ScheduleStatus;

  @ApiProperty()
  isAllDay!: boolean;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;

  @ApiProperty()
  participants!: string[];
}
