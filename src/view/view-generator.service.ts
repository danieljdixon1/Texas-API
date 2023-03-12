import { Injectable } from '@nestjs/common';
import { GameState } from 'src/state/schemas/gamestate.schema';
import { ResPlayerViewData } from 'src/view/schema/res-player-view-data';

@Injectable()
export class ViewGeneratorService {
    getPlayerView(state: GameState){
        const result: ResPlayerViewData = {
            yourTurnFirst: state.yourTurnFirst,
        
            dollars: state.dollars,
            oppoent_dollars: state.oppoent_dollars,

            pot_player: state.pot_player,
            pot_opponent: state.pot_opponent,
            
            cards: state.cards,
            oppoent_cards: state.oppoent_cards,
            table_cards: state.table_cards,
        
            oppoent_action: state.oppoent_action,
        
            deal: state.deal,
            fold: state.fold,
            call: state.call,
            bet: state.bet,
        }
        return result;
    }
    getOpponentView(state: GameState){
        const result: ResPlayerViewData = {
            yourTurnFirst: state.yourTurnFirst,
        
            dollars: state.dollars,
            oppoent_dollars: state.oppoent_dollars,
            pot_player: state.pot_player,
            pot_opponent: state.pot_opponent,
            
            cards: state.cards,
            oppoent_cards: state.oppoent_cards,
            table_cards: state.table_cards,
        
            oppoent_action: state.oppoent_action,
        
            deal: state.deal,
            fold: state.fold,
            call: state.call,
            bet: state.bet,
        }
        return result;
    }
}
