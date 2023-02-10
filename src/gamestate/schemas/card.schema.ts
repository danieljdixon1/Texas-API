import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GameStateDocument = HydratedDocument<Card>;

@Schema()
export class Card {
  @Prop()
  faceUp: boolean;

  @Prop()
  number: number;

  @Prop()
  suit: number;
}

export const CardSchema = SchemaFactory.createForClass(Card);