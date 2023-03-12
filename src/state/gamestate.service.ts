import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCardDto, CreateGameStateDto } from './dto/create-gamestate.dto';
import { GameState, GameStateDocument } from './schemas/gamestate.schema';

@Injectable()
export class GameStateService {

    initialState: CreateGameStateDto = {
      machinePosition: 0,
      yourTurnFirst: false,
      dollars: 499,
      oppoent_dollars: 499,
      pot_player: 0,
      pot_opponent: 0,
      cards: [] as unknown as [CreateCardDto],
      oppoent_cards: [] as unknown as [CreateCardDto],
      table_cards: [] as unknown as [CreateCardDto],
      oppoent_action: "",
      deal: true,
      fold: false,
      call: false,
      bet: false,
    }

    constructor(
        @InjectModel(GameState.name) private readonly gameStateModel: Model<GameStateDocument>,
      ) {}

      async getOnlyGameState(): Promise<GameState>{
        const recordCount = await this.gameStateModel.count().exec();
        let result;
        if (recordCount==0){
          await this.restart();
          result = this.gameStateModel.findOne().exec()
          result.oppoent_action="game was restarted"
        }else{
          result = this.gameStateModel.findOne().exec()
        }
        return result;
      }

      async setOnlyGameState(newState: GameState): Promise<GameState>{
        return await this.gameStateModel.findOneAndReplace(
          {},
          {
            'machinePosition': newState.machinePosition,
            'yourTurnFirst': newState.yourTurnFirst,
            'dollars': newState.dollars,
            'oppoent_dollars': newState.oppoent_dollars,
            'pot_player': newState.pot_player,
            'pot_opponent': newState.pot_opponent,
            'cards': newState.cards,
            'oppoent_cards': newState.oppoent_cards,
            'table_cards': newState.table_cards,
            'oppoent_action': newState.oppoent_action,
            'deal': newState.deal,
            'fold': newState.fold,
            'call': newState.call,
            'bet': newState.bet,
          },
          { upsert: false }
        ).exec();
      }

      async restart(): Promise<GameState>{
        return this.gameStateModel.create(this.initialState);
      }
}
