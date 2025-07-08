import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NotificationStatus, NotificationType } from "../enums/Notification.enum";

@Entity({ name: "notifications" })
export class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  title!: string;

  @Column({ type: "text" })
  message!: string;

  @Column({
    type: "enum",
    enum: NotificationType,
    default: NotificationType.IN_APP,
  })
  type!: NotificationType;

  @Column({
    type: "enum",
    enum: NotificationStatus,
    default: NotificationStatus.PENDING,
  })
  status!: NotificationStatus;

  @Column({ type: "datetime", nullable: true })
  scheduledAt!: Date;

  @Column({ type: "datetime", nullable: true })
  sentAt!: Date;

  @Column({ type: "datetime", nullable: true })
  readAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
