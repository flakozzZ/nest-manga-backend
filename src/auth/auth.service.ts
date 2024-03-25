import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UsersService} from "@/users/users.service";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "@/users/dto/user.dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private JwtService: JwtService) {
    }

    async login() {
    }

    async registration(userDto: UserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate) {
            throw new HttpException("Пользователь с таким эмейл уже сущетсвует", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
    }

}
