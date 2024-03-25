import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RoleService} from "@/role/role.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RoleDto} from "@/role/dto/role.dto";
import {Role} from "@/role/role.model";


@ApiTags("Роли")
@Controller('api')
export class RoleController {
    constructor(private roleService: RoleService) {}


    @ApiOperation({summary: "Создание роли"})
    @ApiResponse({status: 200, type: Role})
    @Post('/roles')
    createRole(@Body() dto: RoleDto) {
        return this.roleService.createRole(dto)
    }

    @ApiOperation({summary: "Получение роли"})
    @ApiResponse({status: 200, type: Role})
    @Get('/roles/:value')
     getRoleByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }

}
