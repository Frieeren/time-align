import { UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { User } from "../entities/user.entity";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let usersService: UsersService;

  beforeEach(async () => {
    const mockJwtService = {
      sign: jest.fn(),
      verify: jest.fn(),
    };

    const mockUsersService = {
      findByEmail: jest.fn(),
      findOrCreateUser: jest.fn(),
    };

    const mockConfigService = {
      get: (key: string) => {
        const configs = {
          "app.jwt.accessTokenExpiry": "15m",
          "app.jwt.refreshTokenExpiry": "7d",
          "app.jwt.secretKey": "test-secret",
        };
        return configs[key];
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwtService },
        { provide: UsersService, useValue: mockUsersService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
    usersService = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("주어진 이메일과 제공자로 사용자가 존재한다면, 해당 사용자 정보를 반환해야 한다", async () => {
    // Given: 시스템에 등록된 사용자가 있다
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
    jest.spyOn(usersService, "findByEmail").mockImplementation(() => Promise.resolve(등록된사용자));

    // When: 해당 사용자의 이메일과 제공자로 인증을 요청한다
    const 결과 = await authService.validateUser("google", "user@frieeren.com");

    // Then: 사용자 정보가 반환되어야 한다
    expect(결과).toEqual(등록된사용자);
  });

  it("주어진 이메일과 제공자로 사용자가 존재하지 않는다면, 인증 실패 예외를 발생시켜야 한다", async () => {
    // Given: 시스템에 등록되지 않은 사용자 정보가 있다
    jest.spyOn(usersService, "findByEmail").mockImplementation(() => Promise.resolve(null));

    // When & Then: 존재하지 않는 사용자로 인증을 요청하면 '잘못된 인증 정보' 예외가 발생해야 한다
    await expect(authService.validateUser("google", "nonexistent@example.com")).rejects.toThrow(UnauthorizedException);
  });

  it("OAuth 데이터가 주어지면, 사용자를 생성하거나 찾고 토큰들을 발급해야 한다", async () => {
    // Given: OAuth에서 받은 사용자 정보가 있다
    const Google사용자 = {
      id: "google123",
      email: "user@frieeren.com",
      name: "홍길동",
      image: "https://avatar.com/user.jpg",
    };

    const 발급된토큰들 = {
      accessToken: "access-token-123",
      refreshToken: "refresh-token-123",
    };

    jest.spyOn(usersService, "findOrCreateUser").mockImplementation(() =>
      Promise.resolve({
        id: 1,
        email: Google사용자.email,
        name: Google사용자.name,
        image: Google사용자.image,
        provider: "google",
        providerId: Google사용자.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as User)
    );

    jest
      .spyOn(jwtService, "sign")
      .mockReturnValueOnce(발급된토큰들.accessToken)
      .mockReturnValueOnce(발급된토큰들.refreshToken);

    // When: OAuth 정보로 로그인을 요청한다
    const 결과 = await authService.oauthLogin({
      email: Google사용자.email,
      name: Google사용자.name,
      image: Google사용자.image,
      provider: "google",
      providerId: Google사용자.id,
    });

    // Then: 사용자 정보와 토큰들이 반환되어야 한다
    expect(결과).toEqual({
      user: {
        id: 1,
        email: Google사용자.email,
        name: Google사용자.name,
      },
      accessToken: 발급된토큰들.accessToken,
      refreshToken: 발급된토큰들.refreshToken,
    });
  });

  it("유효한 리프레시 토큰이 주어지면, 새로운 액세스 토큰을 발급해야 한다", async () => {
    // Given: 유효한 리프레시 토큰과 검증된 페이로드가 있다
    const 유효한리프레시토큰 = "valid-refresh-token";
    const 검증된페이로드 = {
      sub: 1,
      email: "user@frieeren.com",
      name: "홍길동",
    };

    const 새로운액세스토큰 = {
      accessToken: "new-access-token",
    };

    jest.spyOn(jwtService, "verify").mockImplementation(() => 검증된페이로드);
    jest.spyOn(jwtService, "sign").mockReturnValueOnce(새로운액세스토큰.accessToken);

    // When: 토큰 갱신을 요청한다
    const 결과 = await authService.refreshToken(유효한리프레시토큰);

    // Then: 새로운 액세스 토큰이 발급되어야 한다
    expect(결과).toEqual(새로운액세스토큰);
  });

  it("만료된 리프레시 토큰이 주어지면, 인증 실패 예외를 발생시켜야 한다", async () => {
    // Given: 만료된 토큰이 있다
    const 만료된토큰 = "expired-refresh-token";
    jest.spyOn(jwtService, "verify").mockImplementation(() => {
      throw new UnauthorizedException("토큰이 만료되었습니다");
    });

    // When & Then: 만료된 토큰으로 갱신을 요청하면 '유효하지 않은 리프레시 토큰' 예외가 발생해야 한다
    await expect(authService.refreshToken(만료된토큰)).rejects.toThrow(UnauthorizedException);
  });
});
