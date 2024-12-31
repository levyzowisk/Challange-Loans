"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleLoanPersonalAgeCity = void 0;
const PersonalTwo_1 = require("../../repository/PersonalTwo");
class ruleLoanPersonalAgeCity {
    // Se tiver um middleware que garanta que os campos  não sejam nulos, vejo que não a possibilidade de usar try catch
    async apply(client) {
        return Number(client.wage) <= 3000 && Number(client.wage) <= 5000 && Number(client.age) < 50 && client.city == "SP";
    }
    async typeLoan() {
        // return "Receber o empréstimo pessoal especial!"
        return await PersonalTwo_1.PersonalTwoRepository.get();
    }
}
exports.ruleLoanPersonalAgeCity = ruleLoanPersonalAgeCity;
// export class ruleLoan
