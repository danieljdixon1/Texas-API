import { GameState } from "src/state/schemas/gamestate.schema";

export interface machinePhases{
    runPhase(state: GameState): GameState;
}