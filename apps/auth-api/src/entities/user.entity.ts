import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserProvider } from "../enums/user.enum";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  image!: string;

  @Column({
    type: "simple-enum",
    enum: UserProvider,
    default: UserProvider.GOOGLE,
  })
  provider!: UserProvider;

  @Column()
  providerId!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
