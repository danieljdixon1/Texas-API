import { Injectable } from '@nestjs/common';
import { GameState } from 'src/gamestate/schemas/gamestate.schema';

@Injectable()
export class GamePlayPhaseService {
    deal(state: GameState): GameState{
        state.oppoent_action="Cards dealt";
        return state;
    }
    fold(state: GameState): GameState{
        state.oppoent_action="you folded";
        return state;
    }
    call(state: GameState): GameState{
        state.oppoent_action="called";
        return state;
    }
    bet(state: GameState, amount: number): GameState{
        state.oppoent_action="Bet " + amount + "!";
        return state;
    }
}
