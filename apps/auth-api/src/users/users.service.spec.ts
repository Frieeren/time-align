import { Test, type TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let usersService: UsersService;
  let userRepository: Repository<User>;

  const mockUserRepository = {
    findOne: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("이메일로 사용자가 존재하면, 해당 사용자를 반환해야 한다", async () => {
    // Given: 사용자가 존재한다
    const 등록된사용자 = {
      id: 1,
      email: "user@frieeren.com",
      name: "홍길동",
      image: "https://avatar.com/user.jpg",
      provider: "google",
      providerId: "google123",
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;

    jest.spyOn(userRepository, "findOne").mockResolvedValue(등록된사용자);

    // When: 이메일로 사용자를 조회한다
    const 결과 = await usersService.findByEmail("google", "user@frieeren.com");

    // Then: 해당 사용자가 반환되어야 한다
    expect(결과).toEqual(등록된사용자);
  });

  it("이메일로 사용자가 존재하지 않으면, null을 반환해야 한다", async () => {
    // Given: 사용자가 존재하지 않는다
    jest.spyOn(userRepository, "findOne").mockResolvedValue(null);

    // When: 존재하지 않는 사용자를 조회한다
    const 결과 = await usersService.findByEmail("google", "none@frieeren.com");

    // Then: null이 반환되어야 한다
    expect(결과).toBeNull();
  });

  it("사용자 데이터가 주어지면, 새로운 사용자를 생성해야 한다", async () => {
    // Given: 사용자 정보가 주어진다
    const 사용자정보 = {
      email: "new@frieeren.com",
      name: "신규사용자",
      image: "avatar.jpg",
      provider: "google",
      providerId: "google123",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const 생성된사용자 = { id: 1, ...사용자정보 } as User;
    jest.spyOn(userRepository, "save").mockResolvedValue(생성된사용자);

    // When: 새로운 사용자를 생성한다
    const 결과 = await usersService.createUser(사용자정보);

    // Then: 생성된 사용자가 반환되어야 한다
    expect(결과).toEqual(생성된사용자);
  });

  it("기존 사용자가 있으면 해당 사용자를 반환하고, 없으면 새로 생성해야 한다", async () => {
    // Given: 데이터베이스에 사용자가 존재하지 않고, 새로운 사용자 정보가 있다
    const 사용자정보 = {
      email: "new@frieeren.com",
      name: "신규사용자",
      image: "avatar.jpg",
      provider: "google",
      providerId: "google123",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const 생성된사용자 = { id: 2, ...사용자정보 } as User;

    jest.spyOn(userRepository, "findOne").mockResolvedValue(null);
    jest.spyOn(userRepository, "save").mockResolvedValue(생성된사용자);

    // When: 사용자 조회/생성을 요청한다
    const 결과 = await usersService.findOrCreateUser(사용자정보);

    // Then: 새로 생성된 사용자가 반환되어야 한다
    expect(결과).toEqual(생성된사용자);
  });
});
