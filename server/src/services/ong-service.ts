import { ongRepository } from "@/repositories/ong-repository";
import { userRepository } from "@/repositories/user-repository";
import type { OngRequest } from "@/types/ong-types";

export const ongService = {
	getOngById: async (id: string) => {
		return ongRepository.getOngById(id);
	},
	createOng: async (request: OngRequest) => {
		// obter username a partir do token, depois buscar user ID
		const user = await userRepository.getOneUser();
		return ongRepository.createOng(request, user.id);
	},
	updateOng: async (id: string, request: Partial<OngRequest>) => {
		return ongRepository.updateOng(id, request);
	},
};
