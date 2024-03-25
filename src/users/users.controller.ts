import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "@/users/users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "@/users/users.model";
import {UserDto} from "@/users/dto/user.dto";


@ApiTags("Получение юзеров")
@Controller('api')
export class UsersController {
    constructor(private usersService: UsersService) {
    }


    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post('/users')
    createUser(@Body() userDto: UserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Получение пользователя"})
    @ApiResponse({status: 200, type: [User]})
    @Get('/users')
    getUsers() {
        return this.usersService.getUsers()
    }

    @ApiOperation({summary: "Получение одного пользователя"})
    @ApiResponse({status: 200, type: User})
    @Get('/users/:id')
    getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id)
    }

}
