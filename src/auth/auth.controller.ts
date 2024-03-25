import {Body, Controller, HttpException, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "@/auth/auth.service";
import {UserDto} from "@/users/dto/user.dto";



@ApiTags("Авторизация")
@Controller('api')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: UserDto){
        return this.authService.login(userDto)
    }

    @Post("/register")
    register(@Body() userDto: UserDto) {
        return this.authService.registration(userDto)
    }
}
