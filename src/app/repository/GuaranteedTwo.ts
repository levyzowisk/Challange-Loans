import { ConnectionDb } from "../database/Connection";

export class GuaranteedTwoRepository {
    protected static connection = ConnectionDb.getConnection();

    static async get(): Promise<loan[]> {
        try {
            return this.connection.loans_consigment.findMany();
        } catch(error) {
            throw error;
        }
    }
}