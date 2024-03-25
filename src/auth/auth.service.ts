import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UsersService} from "@/users/users.service";
import {JwtService} from "@nestjs/jwt";
import {UserDto} from "@/users/dto/user.dto";
import * as bcrypt from "bcryptjs";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private JwtService: JwtService,
                private configService: ConfigService) {
    }

    async login() {
    }

    async registration(userDto: UserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException("Пользователь с таким эмейл уже сущетсвует", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        const tokens = await this.getTokens(user.id, user.email)


    }

    async updateRefreshToken(userId: number, refreshToken: string) {
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 5)

    }

    async getTokens(userId: number, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
            this.JwtService.signAsync(
                {
                    id: userId,
                    email: email
                },
                {
                    secret: this.configService.get(<string>("JWT_ACCESS_TOKEN")),
                    expiresIn: '15m',
                },
            ),
            this.JwtService.signAsync(
                {
                    id: userId,
                    email: email
                },
                {
                    secret: this.configService.get<string>("JWT_REFRESH_TOKEN"),
                    expiresIn: '7d'
                }
            )
        ])
        return {
            accessToken,
            refreshToken
        }
    }

}
