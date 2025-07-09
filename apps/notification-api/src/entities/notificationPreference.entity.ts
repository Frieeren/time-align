import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NotificationType } from "../enums/Notification.enum";

@Entity({ name: "notification_preferences" })
export class NotificationPreference {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column({
    type: "simple-enum",
    enum: NotificationType,
    default: NotificationType.IN_APP,
  })
  notificationType!: NotificationType;

  @Column({ type: "boolean", default: true })
  isEnabled!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
