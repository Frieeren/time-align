import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UserProvider } from "../enums/user.enum";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    readonly configService: ConfigService
  ) {}

  async validateUser(provider: UserProvider, email: string) {
    const user = await this.usersService.findByEmail(provider, email);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }

  async oauthLogin(oauthData: {
    email: string;
    name: string;
    image: string;
    provider: UserProvider;
    providerId: string;
  }) {
    const user = await this.usersService.findOrCreateUser({
      email: oauthData.email,
      name: oauthData.name,
      image: oauthData.image,
      provider: oauthData.provider,
      providerId: oauthData.providerId,
    });

    const payload = { sub: user.id, email: user.email, name: user.name };

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      accessToken: this.jwtService.sign(payload, {
        expiresIn: this.configService.get<string>("app.jwt.accessTokenExpiry"),
        secret: this.configService.get<string>("app.jwt.secretKey"),
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: this.configService.get<string>("app.jwt.refreshTokenExpiry"),
        secret: this.configService.get<string>("app.jwt.secretKey"),
      }),
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>("app.jwt.secretKey"),
      });

      return {
        accessToken: this.jwtService.sign({
          sub: payload.sub,
          email: payload.email,
        }),
      };
    } catch (error) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}
