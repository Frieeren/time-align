import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class OAuthLoginDto {
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
  @IsString()
  @IsNotEmpty()
  provider!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  providerId!: string;
}
