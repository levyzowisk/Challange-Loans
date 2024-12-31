"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedTwoRepository = void 0;
const Connection_1 = require("../database/Connection");
class GuaranteedTwoRepository {
    static connection = Connection_1.ConnectionDb.getConnection();
    static async get() {
        try {
            return this.connection.loans_consigment.findMany();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.GuaranteedTwoRepository = GuaranteedTwoRepository;
