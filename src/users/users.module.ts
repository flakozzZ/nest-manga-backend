import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "@/users/users.model";
import {Role} from "@/role/role.model";
import {UserRoles} from "@/user-roles/user-roles.model";
import {RoleModule} from "@/role/role.module";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles]),
        RoleModule,

    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {
}
