import { DeckService } from "src/deck/deck.service";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseDealCards implements machinePhases{
    constructor(private readonly deckService: DeckService){}

    runPhase(state: GameState): GameState {
        state.cards.push(this.deckService.drawCardFromDeck(state, true));
        state.cards.push(this.deckService.drawCardFromDeck(state, true));
        state.oppoent_cards.push(this.deckService.drawCardFromDeck(state, false));
        state.oppoent_cards.push(this.deckService.drawCardFromDeck(state, false));
        state.oppoent_action="Cards Dealt";
        state.machinePosition+=1;
        return state;
    }
}