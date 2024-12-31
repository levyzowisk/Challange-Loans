import { ConnectionDb } from "../database/Connection";

export class GuaranteedOneRepository {
    protected static connection = ConnectionDb.getConnection();

    static async get(): Promise<loan[]> {
        try {
            return this.connection.loans_guaranteed.findMany();
        } catch(error) {
            throw error;
        }
    }
}