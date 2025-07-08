import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UserProvider } from "../enums/user.enum";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findByEmail(provider: UserProvider, email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email, provider },
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(userData: {
    email: string;
    name: string;
    image: string;
    provider: UserProvider;
    providerId: string;
  }): Promise<User> {
    const user = new User();
    user.email = userData.email;
    user.name = userData.name;
    user.image = userData.image;
    user.provider = userData.provider;
    user.providerId = userData.providerId;

    return this.userRepository.save(user);
  }

  async findOrCreateUser(userData: {
    email: string;
    name: string;
    image: string;
    provider: UserProvider;
    providerId: string;
  }): Promise<User> {
    let user = await this.findByEmail(userData.provider, userData.email);

    if (!user) {
      user = await this.createUser(userData);
    }

    return user;
  }
}
