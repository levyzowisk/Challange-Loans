"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsigmentRepository = void 0;
const Connection_1 = require("../database/Connection");
class ConsigmentRepository {
    static connection = Connection_1.ConnectionDb.getConnection();
    static async get() {
        try {
            return await this.connection.loans_consigment.findMany();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.ConsigmentRepository = ConsigmentRepository;
