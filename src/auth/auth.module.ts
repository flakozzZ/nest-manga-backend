import {forwardRef, Module} from '@nestjs/common';
import {AuthController} from "@/auth/auth.controller";
import {AuthService} from "@/auth/auth.service";
import {UsersModule} from "@/users/users.module";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";
import {AccessTokenStrategy} from "@/auth/strategies/accessToken.strategy";
import {RefreshTokenStrategy} from "@/auth/strategies/refreshToken.strategy";
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
    imports: [
        UsersModule,
        JwtModule.register({}),
        ConfigModule.forRoot({}),
    ],
    exports: [
        JwtModule
    ]
})
export class AuthModule {

}
