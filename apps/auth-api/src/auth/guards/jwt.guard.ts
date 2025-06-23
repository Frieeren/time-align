import { BadRequestException, type ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JsonWebTokenError, TokenExpiredError } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: unknown, user: unknown, info: unknown, context: ExecutionContext, status?: unknown) {
    if (err || !user) {
      if (err instanceof BadRequestException) {
        throw err;
      }
      if (err instanceof TokenExpiredError) {
        throw new UnauthorizedException("Access Token is expired");
      }
      if (err instanceof JsonWebTokenError) {
        throw new BadRequestException(err.message);
      }
      if (err instanceof SyntaxError) {
        throw new BadRequestException("Invalid JSON object");
      }
      throw new UnauthorizedException("Unauthorized");
    }
    return super.handleRequest(err, user, info, context, status);
  }
}
