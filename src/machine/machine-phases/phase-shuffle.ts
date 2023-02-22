import { DeckService } from "src/deck/deck.service";
import { Card } from "src/state/schemas/card.schema";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseShuffle implements machinePhases{

    runPhase(state: GameState): boolean {
        state.cards.pop();
        state.cards.pop();
        state.oppoent_cards.pop();
        state.oppoent_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.machinePosition=0;
        return true;
    }
}