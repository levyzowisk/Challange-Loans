import { AbstractService } from "../AbstractService";
import { ConsigmentRepository } from "../../repository/Consigment";

export class Consigment implements AbstractService {

    async apply(client: Client): Promise<boolean | null> {
        return Number(client.wage) <= 5000;
    }

    async typeLoan(): Promise<loan[] | null> {
        try {
            return await ConsigmentRepository.get()

        } catch(error) {
            throw error;
        }
    }
}

