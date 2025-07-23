import { Injectable } from "@nestjs/common";
import { CreateScheduleRequestDto } from "./dto/create-schedule.dto";
import { UpdateScheduleRequestDto } from "./dto/update-schedule.dto";

@Injectable()
export class SchedulesService {
  create(createScheduleDto: CreateScheduleRequestDto) {
    return "This action adds a new schedule";
  }

  findAll() {
    return "This action returns all schedules";
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleRequestDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
