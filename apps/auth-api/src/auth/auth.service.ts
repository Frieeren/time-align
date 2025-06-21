import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    readonly configService: ConfigService
  ) {}

  async validateUser(provider: string, email: string) {
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
    provider: string;
    providerId: string;
  }) {
    const user = await this.usersService.findOrCreateUser({
      email: oauthData.email,
      name: oauthData.name,
      image: oauthData.image,
      provider: oauthData.provider,
      providerId: oauthData.providerId,
    });

    const payload = { sub: user.id, email: user.email };

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
        expiresIn: this.configService.get<string>("app.jwt.accessTokenExpiry"),
        secret: this.configService.get<string>("app.jwt.secretKey"),
      }),
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>("app.jwt.secretKey"),
      });

      // refresh token rotation
      return {
        accessToken: this.jwtService.sign({
          sub: payload.sub,
          email: payload.email,
        }),
        refreshToken: this.jwtService.sign(payload, {
          expiresIn: this.configService.get<string>("app.jwt.refreshTokenExpiry"),
          secret: this.configService.get<string>("app.jwt.secretKey"),
        }),
      };
    } catch (error) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}
