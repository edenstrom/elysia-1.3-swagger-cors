import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const testRoutes = new Elysia({ prefix: "test" }).get("/", () => [
  { name: "Test" },
]);

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(testRoutes)
  .get("/test2", () => [{ name: "Test2" }])
  .listen(4000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
