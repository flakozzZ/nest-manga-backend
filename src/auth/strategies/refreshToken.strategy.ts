import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import * as process from "process";
import {Request} from "express"
import {UnauthorizedException} from "@nestjs/common";



export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_REFRESH_TOKEN || "REFRESH_SECRET",
            passReqToCallback: true
        });
    }

    validate(req: Request, payload: any) {
        const refreshToken = req.headers.authorization?.replace('Bearer', '').trim()
        if(!refreshToken) {
            throw new UnauthorizedException('Invalid Token')
        }
        return {...payload, refreshToken}
    }


}
