import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class ApiGatewayAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const userId = request.headers["x-user-id"];
    const userEmail = request.headers["x-user-email"];
    const userName = request.headers["x-user-name"];
    const userRoles = request.headers["x-user-roles"];

    if (!userId) {
      throw new UnauthorizedException("API Gateway에서 인증되지 않은 요청입니다.");
    }

    const parsedUserId = Number.parseInt(userId);
    if (Number.isNaN(parsedUserId)) {
      throw new UnauthorizedException("유효하지 않은 사용자 ID입니다.");
    }

    request.user = {
      id: parsedUserId,
      email: userEmail ?? "",
      name: userName ?? "",
      roles: userRoles?.split(",") || [],
    };

    return true;
  }
}
