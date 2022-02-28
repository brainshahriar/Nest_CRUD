import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface } from './interface/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserInterface>) {}

//  async registerUser(userDto:UserDto){
//       const user = new this.userModel(userDto);
//       return await user.save();
//   }

async registerUser(userDto:UserDto):Promise<UserInterface>{
    const user = new this.userModel(userDto);
    return await user.save();
}


async fetchUser():Promise<UserInterface[]>{
    const user = await this.userModel.find();
    return user;
}

}