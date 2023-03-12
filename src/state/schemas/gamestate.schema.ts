import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CardSchema, Card } from './card.schema';

export type GameStateDocument = HydratedDocument<GameState>;

@Schema()
export class GameState {

  playersTurn: boolean;

  @Prop()
  id: number;

  @Prop()
  machinePosition: number;

  @Prop()
  yourTurnFirst:boolean;

  @Prop()
  dollars: number;
  
  @Prop()
  oppoent_dollars: number;
  
  @Prop()
  pot_player: number;
  
  @Prop()
  pot_opponent: number;
  
  @Prop({ type: [CardSchema] })
  cards: [Card];
  
  @Prop({ type: [CardSchema] })
  oppoent_cards: [Card];
  
  @Prop({ type: [CardSchema] })
  table_cards: [Card];

  @Prop()
  oppoent_action: string;

  @Prop()
  deal: boolean;
  
  @Prop()
  fold: boolean;
  
  @Prop()
  call: boolean;
  
  @Prop()
  bet: boolean;
}

export const GameStateSchema = SchemaFactory.createForClass(GameState);