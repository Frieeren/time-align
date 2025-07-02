import { registerAs } from "@nestjs/config";

export default registerAs("database", () => {
  if (process.env.NODE_ENV === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
    };
  }

  return {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };
});
