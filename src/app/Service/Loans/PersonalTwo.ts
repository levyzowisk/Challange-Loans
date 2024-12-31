import { AbstractService } from "../AbstractService";
import { PersonalTwoRepository } from "../../repository/PersonalTwo";

export class ruleLoanPersonalAgeCity implements AbstractService {
    // Se tiver um middleware que garanta que os campos  não sejam nulos, vejo que não a possibilidade de usar try catch
    async apply(client: Client): Promise<boolean | null> {
        return Number(client.wage) <= 3000 && Number(client.wage) <= 5000 && Number(client.age) < 50 && client.city == "SP";
    }

    async typeLoan(): Promise<loan[] | null> {
        // return "Receber o empréstimo pessoal especial!"
        return await PersonalTwoRepository.get();
    }
}
// export class ruleLoan