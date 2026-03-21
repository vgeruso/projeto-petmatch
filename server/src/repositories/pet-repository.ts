import { eq, ne } from "drizzle-orm";
import { db } from "@/database/connection";
import { ong, pet } from "@/database/schema";

export const petRepository = {
	getPets: async () => {
		return await db
			.select({
				id: pet.id,
				nome: pet.nome,
				urlImagem: pet.urlImagem,
				cidade: ong.cidade,
				estado: ong.uf,
			})
			.from(pet)
			.innerJoin(ong, eq(pet.ongId, ong.id))
			.where(ne(pet.adotado, true));
	},
	getPetById: async (id: string) => {
		const result = await db
			.select({
				pet: pet,
				ong: ong,
			})
			.from(pet)
			.innerJoin(ong, eq(pet.ongId, ong.id))
			.where(eq(pet.id, id));
		return result[0];
	},
};
