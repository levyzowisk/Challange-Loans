"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guaranteed = void 0;
const GuaranteedOne_1 = require("../../repository/GuaranteedOne");
class Guaranteed {
    async apply(client) {
        return Number(client.wage) <= 3000;
    }
    async typeLoan() {
        // return "Receber o empréstimo com garantia!"
        return GuaranteedOne_1.GuaranteedOneRepository.get();
    }
}
exports.Guaranteed = Guaranteed;
