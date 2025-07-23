import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ScheduleParticipant } from "./scheduleParticipants.entity";

export enum ScheduleStatus {
  SCHEDULED = "SCHEDULED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

@Entity({ name: "schedules" })
export class Schedule {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "datetime" })
  startTime!: Date;

  @Column({ type: "datetime" })
  endTime!: Date;

  @Column({ nullable: true })
  location!: string;

  @Column({
    type: "simple-enum",
    enum: ScheduleStatus,
    default: ScheduleStatus.SCHEDULED,
  })
  status!: ScheduleStatus;

  @Column({ type: "boolean", default: false })
  isAllDay!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(
    () => ScheduleParticipant,
    participant => participant.schedule,
    {
      cascade: true,
    }
  )
  participants!: ScheduleParticipant[];
}
