import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NotificationType } from "../enums/Notification.enum";

@Entity({ name: "notification_preferences" })
export class NotificationPreference {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column({
    type: "enum",
    enum: NotificationType,
    default: NotificationType.KAKAO,
  })
  notificationType!: NotificationType;

  @Column({ type: "boolean", default: true })
  isEnabled!: boolean;

  @Column({ type: "json", nullable: true })
  settings!: object;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
