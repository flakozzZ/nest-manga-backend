import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "@/users/users.service";

@Controller('api')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post('/users')
    createUser(@Body() userDto: UserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get('/users')
    getUsers() {
        return this.usersService.getUsers()
    }


    @Get('/users/:id')
    getUserById(@Param('id') id: number) {
        return this.usersService.getUserById(id)
    }

}
