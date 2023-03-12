import { Injectable } from '@nestjs/common';
import { MachineService } from 'src/machine/machine.service';
import { GameState } from 'src/state/schemas/gamestate.schema';

@Injectable()
export class GamePlayPhaseService {
    constructor (private readonly machineService:MachineService){}

    deal(state: GameState): GameState{
        const newState: GameState = this.machineService.runUntilNextPlayerPrompt(state);
        return newState;
    }
    fold(state: GameState): GameState{
        state.machinePosition=0;
        state.pot_opponent+=state.pot_player;
        state.pot_player=0;
        state.playersTurn=true;
        state.deal=true
        state.bet=false;
        state.call=false;
        state.fold=false;
        // state = this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
    call(state: GameState): GameState{
        const amount = state.pot_opponent-state.pot_player;
        if (state.dollars>=amount){
            state.dollars -= amount;
            state.pot_player += amount;
        }
        state = this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
    bet(state: GameState, amount: number): GameState{
        if (state.dollars>=amount){
            state.dollars -= amount;
            state.pot_player += amount;
        }
        state = this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
}
