import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './Products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Biocad', {
      autoCreate: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
