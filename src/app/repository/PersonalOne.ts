import { ConnectionDb } from "../database/Connection";

export class PersonalOneRepository {
    protected static connection = ConnectionDb.getConnection();

    static async get(): Promise<loan[]> {
        try {
            return await this.connection.loans_personal.findMany();

        } catch(error) {
            throw error;
        }
    }
}
