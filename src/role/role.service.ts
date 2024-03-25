import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "@/role/role.model";
import {RoleDto} from "@/role/dto/role.dto";

@Injectable()
export class RoleService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

    async createRole(dto: RoleDto) {
        return await this.roleRepository.create(dto)
    }

    async getRoleByValue(value: string) {
        return await this.roleRepository.findOne({where: {value}})
    }
}
