import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  roles!: string[];
}

export class AuthenticatedRequestDto {
  @ApiProperty()
  user!: UserDto;
}
