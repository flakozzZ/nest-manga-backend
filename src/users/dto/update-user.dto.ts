import {PartialType} from "@nestjs/mapped-types"
import {UserDto} from "@/users/dto/user.dto";


export class UpdateUserDto extends PartialType(UserDto){}
