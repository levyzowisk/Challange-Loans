"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalOneRepository = void 0;
const Connection_1 = require("../database/Connection");
class PersonalOneRepository {
    static connection = Connection_1.ConnectionDb.getConnection();
    static async get() {
        try {
            return await this.connection.loans_personal.findMany();
        }
        catch (error) {
            throw error;
        }
    }
}
exports.PersonalOneRepository = PersonalOneRepository;
