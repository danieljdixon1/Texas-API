import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStateService } from './gameState.service';
import { GameState, GameStateSchema } from './schemas/gamestate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: GameState.name, schema: GameStateSchema }])],
  exports: [GameStateService],
  providers: [GameStateService],
})
export class GameStateModule {}



