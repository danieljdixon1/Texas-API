import { Injectable } from '@nestjs/common';
import { MachineService } from 'src/machine/machine.service';
import { GameState } from 'src/state/schemas/gamestate.schema';

@Injectable()
export class GamePlayPhaseService {
    constructor (private readonly machineService:MachineService){}

    deal(state: GameState): GameState{
        this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
    fold(state: GameState): GameState{
        this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
    call(state: GameState): GameState{
        this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
    bet(state: GameState, amount: number): GameState{
        this.machineService.runUntilNextPlayerPrompt(state);
        return state;
    }
}
