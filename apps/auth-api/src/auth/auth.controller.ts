import { Controller, Post, Body, UseGuards, Get, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt.guard";
import { OAuthLoginDto } from "./dto/oauth-login.dto";
import { RefreshTokenDto } from "./dto/refresh-token.dto";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("oauth")
  async oauthLogin(@Body() oauthDto: OAuthLoginDto) {
    return this.authService.oauthLogin(oauthDto);
  }

  @Post("refresh")
  async refresh(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshToken(refreshTokenDto.refreshToken);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
