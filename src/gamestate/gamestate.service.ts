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
      cards: [] as {} as [CreateCardDto],
      oppoent_cards: [] as {} as [CreateCardDto],
      table_cards: [] as {} as [CreateCardDto],
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
        return this.gameStateModel.findOne().exec();
      }
      async setOnlyGameState(newState: GameState): Promise<GameState>{
        return await this.gameStateModel.findOneAndReplace(newState).exec();
      }
      async restart(): Promise<GameState>{
        console.log("depths")
        const result = await this.gameStateModel.create(this.initialState); //{test: "bob"}
        console.log(result);
        const result2 = await this.getOnlyGameState();
        console.log(result2);
        const result3 = await this.getAllGameState();
        console.log(result3);
        return result2
      }
      async getAllGameState(): Promise<GameState[]>{
        return this.gameStateModel.find().exec();
      }
}
