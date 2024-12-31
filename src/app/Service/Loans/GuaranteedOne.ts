import { AbstractService } from "../AbstractService";
import { GuaranteedOneRepository } from "../../repository/GuaranteedOne";

export class Guaranteed implements AbstractService{

    async apply(client: Client): Promise<boolean | null> {
        return Number(client.wage) <= 3000;
    }

    async typeLoan(): Promise<loan[] | null> {
        // return "Receber o empréstimo com garantia!"
        return GuaranteedOneRepository.get();
    }
}