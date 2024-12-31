"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluateLoan = void 0;
const Consigment_1 = require("./Loans/Consigment");
const GuaranteedOne_1 = require("./Loans/GuaranteedOne");
const GuaranteedTwo_1 = require("./Loans/GuaranteedTwo");
const PersonalOne_1 = require("./Loans/PersonalOne");
const PersonalTwo_1 = require("./Loans/PersonalTwo");
class EvaluateLoan {
    rule;
    constructor() {
        this.rule = [
            new PersonalOne_1.ruleLoanPersonalLowWage(),
            new PersonalTwo_1.ruleLoanPersonalAgeCity(),
            new Consigment_1.Consigment(),
            new GuaranteedOne_1.Guaranteed(),
            new GuaranteedTwo_1.GuaranteedAgeCity()
        ];
    }
    async evaluate(client) {
        try {
            // Bom, nos deparamos com um  desafio que era fornecer possíveis formas de empréstimod, com base nos dados do cliente.
            // Um cliente ele poderia ter várias possibilidades de empréstimos.
            // Após conceber a ideia, o próximo passo foi decidir, qual paradigma usar para solucionar o problema. 
            // Dentre muitos, o escolhido foi o paradigma orientação a objeto(POO).
            // Cada classe seria responsável por cada tipo de empréstimo, e cada classe teria dois metódos, um seria para aplicar a regra, onde me retornaria um valor booleano e outro metódo para mostrar a mensagem do empréstimo.
            return await Promise.all(this.rule.map(async (regra) => {
                const isApplicable = await regra.apply(client);
                return isApplicable ? await regra.typeLoan() : null;
            }));
        }
        catch (error) {
            throw error;
        }
    }
}
exports.EvaluateLoan = EvaluateLoan;
