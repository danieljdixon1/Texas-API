import { GameState } from "src/state/schemas/gamestate.schema";
import { machinePhases } from "../interfaces/machine-phases";

export class phaseFlip implements machinePhases{
    runPhase(state: GameState): GameState {

        state.oppoent_cards.forEach(element => {
            element.faceUp=true;
        });

        state.machinePosition=0;
        state.playersTurn=true;
        state.deal=true;
        state.fold=false;
        state.call=false;
        state.bet=false;
        return state;
    }
}