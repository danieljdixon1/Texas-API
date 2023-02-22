import { Card } from "./Card";

export interface ResPlayerViewData{
    yourTurnFirst:boolean;

    dollars: number;
    oppoent_dollars: number;
    pot_dollars: number;
    
    cards: Card[];
    oppoent_cards: Card[];
    table_cards: Card[];

    oppoent_action: string;

    deal: boolean,
    fold: boolean,
    call: boolean,
    bet: boolean
}