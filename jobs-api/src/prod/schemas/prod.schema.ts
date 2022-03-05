import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdDocument = Prod & Document

@Schema()
export class Prod {
  @Prop()
  username: string;

  @Prop()
  description: string;

  @Prop()
  phone: number;

  @Prop({ default: Date.now })
  date: Date;

}


export const ProdSchema = SchemaFactory.createForClass(Prod)