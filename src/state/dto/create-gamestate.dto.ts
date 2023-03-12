export class CreateGameStateDto {
    machinePosition: number;
    yourTurnFirst:boolean;
    dollars: number;
    oppoent_dollars: number;
    pot_player: number;
    pot_opponent: number;
    cards: [CreateCardDto];
    oppoent_cards: [CreateCardDto];
    table_cards: [CreateCardDto];
    oppoent_action: string;
    deal: boolean;
    fold: boolean;
    call: boolean;
    bet: boolean;
}

export class CreateCardDto {
    faceUp: boolean;
    number: number;
    suit: number;
}