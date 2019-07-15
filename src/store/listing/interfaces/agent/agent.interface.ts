/**
 * Agent Model Interface
 * @author Ghazwan S. M. <ghazwan.sihamudin@gmail.com>
 * @since 2019.07.13
 */

export interface AgentInterface {
    name: string;
    picture: string;
    contact: AgentContactInterface;
}

export interface AgentContactInterface {
    address: string;
    telephone: string;
    telephone2?: string;
    website?: string;
}
