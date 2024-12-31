import { GuaranteedTwoRepository } from "../../repository/GuaranteedTwo";
import { AbstractService } from "../AbstractService";

export class GuaranteedAgeCity implements AbstractService {
    async apply(client: Client): Promise<boolean | null> {
        return Number(client.wage) >= 3000 && Number(client.wage) <= 5000 && client.city == "SP" && Number(client.age) < 30;
    }

    async typeLoan(): Promise<loan[] | null> {
        // return "Receber empréstimo com garantia especial!";
        return GuaranteedTwoRepository.get();
    }
}