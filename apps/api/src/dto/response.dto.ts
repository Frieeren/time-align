import { HttpStatus } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class CommonResponseDto<T = unknown> {
  @ApiProperty()
  statusCode!: HttpStatus;

  @ApiProperty()
  message!: string;

  @ApiProperty()
  data?: T;
}

export class PageInfo {
  @ApiProperty()
  page!: number;

  @ApiProperty()
  size!: number;

  @ApiProperty()
  totalElements!: number;

  @ApiProperty()
  totalPages!: number;
}

export class PaginatedData<T = unknown> {
  @ApiProperty()
  data!: T[];

  @ApiProperty()
  pageInfo!: PageInfo;
}

export class CommonPaginatedResponseDto<T = unknown> {
  @ApiProperty()
  statusCode!: HttpStatus;

  @ApiProperty()
  message!: string;

  @ApiProperty()
  data!: PaginatedData<T>;
}
