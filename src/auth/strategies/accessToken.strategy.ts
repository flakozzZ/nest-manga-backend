import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import * as process from "process";
import {User} from "@/users/users.model";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt-access'){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_ACCESS_TOKEN || "ACCESS_SECRET"
        });
    }

    validate(user: User) {
        return {email: user.email, id: user.id, roles: user.roles}
    }

}
