import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CommonPaginatedResponseDto, CommonResponseDto, PaginatedData } from "../dto/response.dto";
import { getStatusMessage } from "../helpers/status-message.helper";

@Injectable()
export class CommonResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map(data => {
        const statusCode: HttpStatus = context.switchToHttp().getResponse().statusCode;
        const message = getStatusMessage(statusCode);

        if (this.isPaginatedData(data)) {
          return this.createPaginatedResponse(statusCode, message, data);
        }

        return this.createCommonResponse(statusCode, message, data);
      })
    );
  }

  private isPaginatedData(data: unknown): boolean {
    if (!data || typeof data !== "object") {
      return false;
    }

    return "data" in data && "pageInfo" in data && Array.isArray(data.data);
  }

  private createCommonResponse<T>(statusCode: HttpStatus, message: string, data: T): CommonResponseDto<T> {
    const response: CommonResponseDto<T> = {
      statusCode,
      message,
    };

    if (data !== null && data !== undefined) {
      response.data = data;
    }

    return response;
  }

  private createPaginatedResponse<T>(
    statusCode: HttpStatus,
    message: string,
    data: PaginatedData<T>
  ): CommonPaginatedResponseDto<T> {
    const { data: items, pageInfo } = data;
    const totalPages = Math.ceil(pageInfo.totalElements / pageInfo.size);

    const paginatedData: PaginatedData<T> = {
      data: items,
      pageInfo: {
        page: pageInfo.page,
        size: pageInfo.size,
        totalElements: pageInfo.totalElements,
        totalPages,
      },
    };

    return {
      statusCode,
      message,
      data: paginatedData,
    };
  }
}
