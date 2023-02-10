import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGameStateDto } from './dto/create-gamestate.dto';
import { GameState, GameStateDocument } from './schemas/gamestate.schema';

@Injectable()
export class GameStateService {



    constructor(
        @InjectModel(GameState.name) private readonly catModel: Model<GameStateDocument>,
      ) {}
    
      async create(createCatDto: CreateGameStateDto): Promise<GameState> {
        console.log("a");
        const createdCat = await this.catModel.create(createCatDto);
        console.log("b");
        return createdCat;
      }
    
      async findAll(): Promise<GameState[]> {
        console.log("aa");
        const result = await this.catModel.find().exec();
        console.log(result);
        console.log("bb");
        return result;
      }
    
      async findOne(id: string): Promise<GameState> {
        return this.catModel.findOne({ _id: id }).exec();
      }
    
      async delete(id: string) {
        const deletedCat = await this.catModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deletedCat;
      }













    // async state(): Promise<GameState[]>{
    //     // const result1 = await this.GameStateModel.create({testField: "testValue QWERTY"});
    //     // console.log(result1);

    //     const result2 = await this.GameStateModel.find().exec();
    //     console.log(result2);
    //     return result2
    // }

    // async create(createCatDto: CreateCatDto): Promise<GameState> {
    //     const createdCat = await this.catModel.create(createCatDto);
    //     return createdCat;
    // }

    // async findAll(): Promise<Cat[]> {
    //     return this.catModel.find().exec();
    // }

    // async findOne(id: string): Promise<Cat> {
    //     return this.catModel.findOne({ _id: id }).exec();
    // }

    // async delete(id: string) {
    //     const deletedCat = await this.catModel
    //         .findByIdAndRemove({ _id: id })
    //         .exec();
    //     return deletedCat;
    // }
}
