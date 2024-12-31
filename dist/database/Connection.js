"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionDb = void 0;
const client_1 = require("@prisma/client");
class ConnectionDb {
    static connection = new client_1.PrismaClient;
    static getConnection() {
        return this.connection ? this.connection : (this.connection = new client_1.PrismaClient());
    }
}
exports.ConnectionDb = ConnectionDb;
