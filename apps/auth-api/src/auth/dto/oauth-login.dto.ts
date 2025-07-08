import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserProvider } from "../../enums/user.enum";

class OAuthLoginUserDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class OAuthLoginRequestDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  image!: string;

  @ApiProperty()
  @IsEnum(UserProvider)
  @IsNotEmpty()
  provider!: UserProvider;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  providerId!: string;
}

export class OAuthLoginResponseDto {
  @ApiProperty()
  user!: OAuthLoginUserDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  accessToken!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  refreshToken!: string;
}
