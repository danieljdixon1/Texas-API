import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseShuffle implements machinePhases{

    runPhase(state: GameState): GameState {
        state.cards.pop();
        state.cards.pop();
        state.oppoent_cards.pop();
        state.oppoent_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.table_cards.pop();
        state.yourTurnFirst=!state.yourTurnFirst;
        state.machinePosition+=1;
        state.dollars+=state.pot_player;
        state.oppoent_dollars+=state.pot_opponent;
        state.pot_player=0;
        state.pot_opponent=0;
        return state;
    }
}