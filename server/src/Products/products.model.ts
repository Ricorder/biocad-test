import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product {
  @Prop({ required: true })
  typeOfDisease: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mecanism: string;

  @Prop({ required: true })
  indication: string;

  @Prop({ required: true })
  stage: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
