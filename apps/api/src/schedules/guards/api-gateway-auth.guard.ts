import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class ApiGatewayAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const userId = request.headers["x-user-id"];

    if (!userId) {
      throw new UnauthorizedException("API Gateway에서 인증되지 않은 요청입니다.");
    }

    request.user = {
      id: Number.parseInt(userId),
      email: request.headers["x-user-email"],
      name: request.headers["x-user-name"],
      roles: request.headers["x-user-roles"]?.split(",") || [],
    };

    return true;
  }
}
