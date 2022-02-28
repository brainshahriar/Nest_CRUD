import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type CatDocument = Cat & Document;

@Schema()
class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop({default:Date.now})
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);