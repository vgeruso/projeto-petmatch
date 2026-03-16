import Elysia from "elysia";
import { db } from "../database/connection";
import { petTable } from "../database/schema";

const petRoutes = new Elysia({prefix: "/pets"})
    .get("/", () => db.select().from(petTable));

export default petRoutes;