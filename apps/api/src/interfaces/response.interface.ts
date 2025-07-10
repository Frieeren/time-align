import { HttpStatus } from "@nestjs/common";

export interface CommonResponse<T = unknown> {
  statusCode: HttpStatus;
  message: string;
  data?: T;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface PaginatedData<T = unknown> {
  data: T[];
  pageInfo: PageInfo;
}

export interface CommonPaginatedResponse<T = unknown> {
  statusCode: HttpStatus;
  message: string;
  data: PaginatedData<T>;
}
