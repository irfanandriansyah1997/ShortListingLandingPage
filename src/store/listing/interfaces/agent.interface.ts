/**
 * Agent Model Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.13
 */

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
