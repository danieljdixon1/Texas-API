import { Injectable } from '@nestjs/common';
import { GameState } from 'src/gamestate/schemas/gamestate.schema';

@Injectable()
export class GamePlayPhaseService {
    deal(oldState: GameState): GameState{
        const newState: GameState = oldState;
        return newState;
    }
    fold(oldState: GameState): GameState{
        const newState: GameState = oldState;
        return newState;
    }
    call(oldState: GameState): GameState{
        const newState: GameState = oldState;
        return newState;
    }
    bet(oldState: GameState): GameState{
        const newState: GameState = oldState;
        return newState;
    }
}
