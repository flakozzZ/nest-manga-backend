import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from "@/auth/auth.controller";
import {AuthService} from "@/auth/auth.service";
import {UsersModule} from "@/users/users.module";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {AccessTokenStrategy} from "@/auth/strategies/accessToken.strategy";
import {RefreshTokenStrategy} from "@/auth/strategies/refreshToken.strategy";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({})
    ],
    exports: [
        JwtModule
    ]
})
export class AuthModule {

}
