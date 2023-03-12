import { DeckService } from "src/deck/deck.service";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseRun implements machinePhases{
    constructor(private readonly deckService: DeckService){}

    runPhase(state: GameState): GameState {
        state.table_cards.push(this.deckService.drawCardFromDeck(state, true));
        state.machinePosition+=1;
        return state;
    }
}