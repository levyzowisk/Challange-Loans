import { PrismaClient } from "@prisma/client";

export class ConnectionDb {

    private static connection: PrismaClient = new PrismaClient; 

    static getConnection(): PrismaClient {
        return this.connection ? this.connection : (this.connection = new PrismaClient());
    }
}
