import { HttpStatus } from "@nestjs/common";

const STATUS_MESSAGES: Partial<Record<HttpStatus, string>> = {
  // 2xx Success
  [HttpStatus.OK]: "요청이 성공적으로 처리되었습니다.",
  [HttpStatus.CREATED]: "리소스가 성공적으로 생성되었습니다.",
  [HttpStatus.ACCEPTED]: "요청이 접수되었습니다.",
  [HttpStatus.NO_CONTENT]: "요청이 성공적으로 처리되었습니다.",

  // 4xx Client Error
  [HttpStatus.BAD_REQUEST]: "잘못된 요청입니다.",
  [HttpStatus.UNAUTHORIZED]: "인증이 필요합니다.",
  [HttpStatus.FORBIDDEN]: "권한이 없습니다.",
  [HttpStatus.NOT_FOUND]: "요청한 리소스를 찾을 수 없습니다.",
  [HttpStatus.METHOD_NOT_ALLOWED]: "허용되지 않은 메서드입니다.",
  [HttpStatus.CONFLICT]: "리소스 충돌이 발생했습니다.",
  [HttpStatus.UNPROCESSABLE_ENTITY]: "처리할 수 없는 요청입니다.",

  // 5xx Server Error
  [HttpStatus.INTERNAL_SERVER_ERROR]: "서버 내부 오류가 발생했습니다.",
  [HttpStatus.BAD_GATEWAY]: "게이트웨이 오류가 발생했습니다.",
  [HttpStatus.SERVICE_UNAVAILABLE]: "서비스를 사용할 수 없습니다.",
  [HttpStatus.GATEWAY_TIMEOUT]: "게이트웨이 시간 초과입니다.",
} as const;

export function getStatusMessage(statusCode: HttpStatus): string {
  return STATUS_MESSAGES[statusCode] || "알 수 없는 상태입니다.";
}
