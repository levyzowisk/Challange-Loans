"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedAgeCity = void 0;
const GuaranteedTwo_1 = require("../../repository/GuaranteedTwo");
class GuaranteedAgeCity {
    async apply(client) {
        return Number(client.wage) >= 3000 && Number(client.wage) <= 5000 && client.city == "SP" && Number(client.age) < 30;
    }
    async typeLoan() {
        // return "Receber empréstimo com garantia especial!";
        return GuaranteedTwo_1.GuaranteedTwoRepository.get();
    }
}
exports.GuaranteedAgeCity = GuaranteedAgeCity;
