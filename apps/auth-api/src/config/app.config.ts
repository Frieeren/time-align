import { registerAs } from "@nestjs/config";

export default registerAs("app", () => ({
  env: process.env.NODE_ENV || "development",
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    accessTokenExpiry: "1h",
    refreshTokenExpiry: "7d",
  },
}));
