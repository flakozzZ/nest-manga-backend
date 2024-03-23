import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RoleService} from "@/role/role.service";

@Controller('api')
export class RoleController {
    constructor(private roleService: RoleService) {}


    @Post('/roles')
    createRole(@Body() dto: RoleDto) {
        return this.roleService.createRole(dto)
    }

    @Get('/roles/:value')
     getRoleByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }

}
