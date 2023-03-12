import { Card } from "../../view/schema/Card";

export interface ReqOpponentViewData{
    yourTurnFirst:boolean;

    dollars: number;
    oppoent_dollars: number;
    pot_player: number;
    pot_opponent: number;
    
    cards: Card[];
    oppoent_cards: Card[];
    table_cards: Card[];

    opponentsAction: string;

    deal: boolean,
    fold: boolean,
    call: boolean,
    bet: boolean
}