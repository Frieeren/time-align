import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { OAuthLoginRequestDto, OAuthLoginResponseDto } from "./dto/oauth-login.dto";
import { RefreshTokenRequestDto, RefreshTokenResponseDto } from "./dto/refresh-token.dto";
import { JwtAuthGuard } from "./guards/jwt.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("oauth")
  @ApiResponse({
    status: 200,
    description: "OAuth 로그인 성공",
    type: OAuthLoginResponseDto,
  })
  async oauthLogin(@Body() oauthDto: OAuthLoginRequestDto): Promise<OAuthLoginResponseDto> {
    return this.authService.oauthLogin(oauthDto);
  }

  @Post("refresh")
  @ApiResponse({
    status: 200,
    description: "토큰 갱신 성공",
    type: RefreshTokenResponseDto,
  })
  async refresh(@Body() refreshTokenDto: RefreshTokenRequestDto): Promise<RefreshTokenResponseDto> {
    return this.authService.refreshToken(refreshTokenDto.refreshToken);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
