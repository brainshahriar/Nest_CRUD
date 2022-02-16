import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:'Product',schema:ProductSchema
    }])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
