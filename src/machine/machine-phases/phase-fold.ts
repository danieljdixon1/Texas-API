import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseFold implements machinePhases{

    runPhase(state: GameState): GameState {
        state.playersTurn=true;
        state.deal=true;
        state.fold=false;
        state.call=false;
        state.bet=false;
        return state;
    }
}