import { ConnectionDb } from "../database/Connection";

export class ConsigmentRepository {
    protected static connection = ConnectionDb.getConnection();

    static async get(): Promise<loan[]> {
        try {
            return await this.connection.loans_consigment.findMany();
        } catch(error) {
            throw error;
        }
    }
}