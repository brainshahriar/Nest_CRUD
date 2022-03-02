import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class Jobs {
  @Prop()
  title: string;

  @Prop()
  salary: number;
}

export const JobSchema = SchemaFactory.createForClass(Jobs);