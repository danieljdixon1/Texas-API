import { Card } from "./Card";

export interface ResPlayerViewData{
    yourTurnFirst:boolean;

    dollars: number;
    oppoent_dollars: number;
    pot_player: number;
    pot_opponent: number;
    
    cards: Card[];
    oppoent_cards: Card[];
    table_cards: Card[];

    oppoent_action: string;

    deal: boolean,
    fold: boolean,
    call: boolean,
    bet: boolean
}