import { Consigment } from "./Loans/Consigment"
import { Guaranteed } from "./Loans/GuaranteedOne"
import { GuaranteedAgeCity } from "./Loans/GuaranteedTwo"
import { ruleLoanPersonalLowWage } from "./Loans/PersonalOne"
import { ruleLoanPersonalAgeCity } from "./Loans/PersonalTwo"

export class EvaluateLoan {
    private rule: loanRule[]

    constructor() {
        this.rule = [
            new ruleLoanPersonalLowWage(),
            new ruleLoanPersonalAgeCity(),
            new Consigment(),
            new Guaranteed(),
            new GuaranteedAgeCity()
        ]
    }
    async evaluate(client: Client): Promise<(string | null | loan[])[]> {
        try {

            // Bom, nos deparamos com um  desafio que era fornecer possíveis formas de empréstimod, com base nos dados do cliente.
            // Um cliente ele poderia ter várias possibilidades de empréstimos.
            // Após conceber a ideia, o próximo passo foi decidir, qual paradigma usar para solucionar o problema. 
            // Dentre muitos, o escolhido foi o paradigma orientação a objeto(POO).
            // Cada classe seria responsável por cada tipo de empréstimo, e cada classe teria dois metódos, um seria para aplicar a regra, onde me retornaria um valor booleano e outro metódo para mostrar a mensagem do empréstimo.

            return await Promise.all(
                this.rule.map(async (regra) => {
                    const isApplicable = await regra.apply(client)
                    return isApplicable ? await regra.typeLoan() : null
                })    
            )
            
        } catch(error) {
            throw error
        }
    }
    
}
