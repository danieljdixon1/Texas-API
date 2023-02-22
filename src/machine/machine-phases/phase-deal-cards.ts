import { DeckService } from "src/deck/deck.service";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseDealCards implements machinePhases{
    constructor(private readonly deckService: DeckService){}

    runPhase(state: GameState): boolean {
        state.cards.push(this.deckService.drawCardFromDeck(state));
        state.cards.push(this.deckService.drawCardFromDeck(state));
        state.oppoent_cards.push(this.deckService.drawCardFromDeck(state));
        state.oppoent_cards.push(this.deckService.drawCardFromDeck(state));
        state.machinePosition+=1;
        return true;
    }
}