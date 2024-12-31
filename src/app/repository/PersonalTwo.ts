import {PrismaClient } from "@prisma/client";
import { ConnectionDb } from "../database/Connection";

export class PersonalTwoRepository {
    private static connection = ConnectionDb.getConnection()

    static async get(): Promise<loan[]> {
        try {
            return await this.connection.loans_personal.findMany();

        } catch (error) {
            throw error;
        }  
    }
}