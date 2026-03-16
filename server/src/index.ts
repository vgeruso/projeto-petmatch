import { Elysia } from "elysia";
import petRoutes from "./routes/pet-route";

const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .use(petRoutes)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
