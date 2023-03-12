import { DeckService } from "src/deck/deck.service";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseFinalBet implements machinePhases{
    runPhase(state: GameState): GameState {
        if (state.pot_player!=state.pot_opponent){
            if (state.yourTurnFirst){
                state.oppoent_action="Player final bet";
                state.deal=false;
                state.fold=true;
                state.call=true;
                state.bet=false;
                state.playersTurn=true;
            }else{
                state.oppoent_action="AI final bet";
            }
        }
        state.machinePosition+=1;
        return state;
    }
}