import {BadRequestException, HttpException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "@/users/users.model";
import {RoleService} from "@/role/role.service";
import {Role} from "@/role/role.model";
import {UserRoles} from "@/user-roles/user-roles.model";
import {UserDto} from "@/users/dto/user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User
    , private roleService: RoleService) {}

    async createUser(dto: UserDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.roleService.getRoleByValue("ROLE_READER")
        await user.$set('roles', [role.id])
        return user
    }
    async getUsers(){
        return await this.userRepository.findAll({include: {
                model: Role,
                as: 'roles',
                through: {
                    attributes: []
                }
            }});
    }

    async getUserById(id: number) {
            return await this.userRepository.findByPk(id, {include: {
                    model: Role,
                    as: 'roles',
                    through: {
                        attributes: []
                    }
                }});
    }


    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}})
    }

    async updateUser(id: number, updateUserDto: UserDto) {
        const user = await this.getUserById(id)
        if(!user) {
            throw new NotFoundException(`Пользователь с ${id} не найден`)
        }
        await user.update(updateUserDto)
        return user
    }
}
