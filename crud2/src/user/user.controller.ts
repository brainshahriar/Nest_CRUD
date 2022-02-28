import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService
    ){}
        @Post('/newuser')
        async newUser(@Res() res,@Body() userDto:UserDto){
            const user =await this.userService.registerUser(userDto);
            return res.status(HttpStatus.OK).json({
                response: 'Inserted'
            });
        }
        @Get('/')
        async alluser(@Res() res){
            const user = await this.userService.fetchUser();
            return res.status(HttpStatus.OK).json(
                user
            );
        }
}
