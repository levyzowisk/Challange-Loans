"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleLoanPersonalLowWage = void 0;
const PersonalOne_1 = require("../../repository/PersonalOne");
class ruleLoanPersonalLowWage {
    async apply(client) {
        try {
            console.log(client);
            return Number(client.wage) <= 3000;
        }
        catch (error) {
            throw error;
        }
    }
    async typeLoan() {
        try {
            // Tenho que depois fazer o acesso ao banco  de dados
            // return "Receber o empréstimo pessoal!";
            return await PersonalOne_1.PersonalOneRepository.get();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ruleLoanPersonalLowWage = ruleLoanPersonalLowWage;
