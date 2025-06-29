import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RefreshTokenRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refreshToken!: string;
}

export class RefreshTokenResponseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accessToken!: string;
}
