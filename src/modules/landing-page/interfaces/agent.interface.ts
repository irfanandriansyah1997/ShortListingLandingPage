export interface AgentInterface {
    id: number;
    name: string;
    picture: string;
    contact: AgentContactInterface;
}

export interface AgentContactInterface {
    address: string;
    telephone: number;
    telephone2: number;
    website: string;
}
