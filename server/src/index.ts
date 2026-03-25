import { Elysia } from "elysia";
import ongRoutes from "@/routes/ong-route";
import petRoutes from "@/routes/pet-route";

const app = new Elysia()
	.group("/api", (api) => {
		api.use(petRoutes);
		api.use(ongRoutes);
		return api;
	})
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
