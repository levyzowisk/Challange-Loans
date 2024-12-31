"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consigment = void 0;
const Consigment_1 = require("../../repository/Consigment");
class Consigment {
    async apply(client) {
        return Number(client.wage) <= 5000;
    }
    async typeLoan() {
        try {
            return await Consigment_1.ConsigmentRepository.get();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Consigment = Consigment;
