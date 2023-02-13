import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCardDto, CreateGameStateDto } from './dto/create-gamestate.dto';
import { GameState, GameStateDocument } from './schemas/gamestate.schema';

@Injectable()
export class GameStateService {

    initialState: CreateGameStateDto = {
      yourTurnFirst: true,
      dollars: 499,
      oppoent_dollars: 499,
      pot_dollars: 0,
      cards: [{faceUp: false} as CreateCardDto],
      oppoent_cards: [{faceUp: false, suit: 1, number: 2} as CreateCardDto],
      table_cards: [{faceUp: false, suit: 1, number: 2} as CreateCardDto],
      oppoent_action: "",
      deal: false,
      fold: false,
      call: false,
      bet: false,
    }

    constructor(
        @InjectModel(GameState.name) private readonly gameStateModel: Model<GameStateDocument>,
      ) {}

      async getOnlyGameState(): Promise<GameState>{
        const recordCount = await this.gameStateModel.count().exec();
        if (recordCount==0){
          await this.restart();
        }
        return this.gameStateModel.findOne().exec();
      }

      async setOnlyGameState(newState: GameState): Promise<GameState>{
        return await this.gameStateModel.findOneAndReplace(
          {},
          {
            'yourTurnFirst': newState.yourTurnFirst,
            'dollars': newState.dollars,
            'oppoent_dollars': newState.oppoent_dollars,
            'pot_dollars': newState.pot_dollars,
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
