import { eq, isNull } from "drizzle-orm";
import { db } from "@/database/connection";
import { ong, user } from "@/database/schema";

export const userRepository = {
	getOneUser: async () => {
		// metodo temporario
		// seleciona um usuario que não possui ONG
		const result = await db
			.select({
				id: user.id,
			})
			.from(user)
			.leftJoin(ong, eq(ong.userId, user.id))
			.where(isNull(ong.userId));
		return result[0];
	},
};
