import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ScheduleParticipantResponseStatus, ScheduleParticipantRole } from "../enums/schedule.enum";
import { Schedule } from "./schedule.entity";

@Entity({ name: "schedule_participants" })
export class ScheduleParticipant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scheduleId!: number;

  @Column()
  userId!: number;

  @Column({
    type: "simple-enum",
    enum: ScheduleParticipantRole,
    default: ScheduleParticipantRole.ATTENDEE,
  })
  role!: ScheduleParticipantRole;

  @Column({
    type: "simple-enum",
    enum: ScheduleParticipantResponseStatus,
    default: ScheduleParticipantResponseStatus.PENDING,
  })
  responseStatus!: ScheduleParticipantResponseStatus;

  @Column({ type: "datetime", nullable: true })
  responseAt!: Date;

  @ManyToOne(() => Schedule, { onDelete: "CASCADE" })
  @JoinColumn({ name: "scheduleId" })
  schedule!: Schedule;

  @CreateDateColumn()
  createdAt!: Date;
}
