export abstract class AbstractService {
    async apply(client: Client): Promise<boolean | null> {
        return true
    }

    async typeLoan(): Promise<string | null | loan[]> {
        return ""
    }
}