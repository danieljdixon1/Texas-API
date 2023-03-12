import { DeckService } from "src/deck/deck.service";
import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseFirstBet implements machinePhases{
    runPhase(state: GameState): GameState {
        if (state.yourTurnFirst){
            state.oppoent_action="your turn first";
            state.deal=false;
            state.fold=true;
            state.call=false;
            state.bet=true;
            state.playersTurn=true;
        }else{
            state.oppoent_action="AI turn first";
        }
        state.machinePosition+=1;
        return state;
    }
}