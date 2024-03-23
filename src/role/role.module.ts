import {Module} from '@nestjs/common';
import {RoleService} from './role.service';
import {RoleController} from './role.controller';
import {Role} from "@/role/role.model";
import {User} from "@/users/users.model";
import {UserRoles} from "@/user-roles/user-roles.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    providers: [RoleService],
    controllers: [RoleController],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles])
    ],
    exports: [
        RoleService
    ]
})
export class RoleModule {
}
