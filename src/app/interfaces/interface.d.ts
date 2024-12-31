interface Client {
    name: string;
    wage: string | number;
    age: number | string;
    city: string;

}
interface loanRule{
    apply(client: Client): Promise<boolean | null> 
    typeLoan(): Promise<string| null | loan[]>
}

interface loan {
    id?: string | number | null
    name?: string
    interest_rate?: string
}

// (method) PersonalOneRepository.get(): Promise<{
//     id: number;
//     name: string;
//     interest_rate: string;
// }[]>