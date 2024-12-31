"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedOneRepository = void 0;
const Connection_1 = require("../database/Connection");
class GuaranteedOneRepository {
    static connection = Connection_1.ConnectionDb.getConnection();
    static async get() {
        try {
            return this.connection.loans_guaranteed.findMany();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.GuaranteedOneRepository = GuaranteedOneRepository;
