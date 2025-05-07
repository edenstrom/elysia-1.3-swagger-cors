import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const testRoutes = new Elysia({ prefix: "test" }).get("/", () => [
  { name: "Test" },
]);

/**
 * Test by running the server and visiting:
 * http://localhost:4000/test
 * http://localhost:4000/test2
 *
 * Test will not work
 * Test2 will work
 *
 * Uncomment EITHER swagger OR cors
 * Now test will work
 */
const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(testRoutes)
  .get("/test2", () => [{ name: "Test2" }])
  .listen(4000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
