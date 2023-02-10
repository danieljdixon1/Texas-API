import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GameStateDocument = HydratedDocument<GameState>;

@Schema()
export class GameState {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const GameStateSchema = SchemaFactory.createForClass(GameState);