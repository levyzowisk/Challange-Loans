import { AbstractService } from "../AbstractService";
import { PersonalOneRepository } from "../../repository/PersonalOne";

export class ruleLoanPersonalLowWage implements AbstractService {
    
    async apply (client: Client): Promise<boolean | null> {
        try {
            console.log(client);
            
            return Number(client.wage) <= 3000;

        } catch(error) {
            throw error;
        }
    }
    async typeLoan(): Promise<loan[] | null> {
        try {
            // Tenho que depois fazer o acesso ao banco  de dados
            // return "Receber o empréstimo pessoal!";
            return await PersonalOneRepository.get()
        } catch(error) {
            throw error;
        }
    }
}