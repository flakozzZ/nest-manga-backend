import {BelongsToMany, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {User} from "@/users/users.model";
import {UserRoles} from "@/user-roles/user-roles.model";
import {ApiProperty} from "@nestjs/swagger";

interface RoleCreationAttrs {
    value: string
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: "ROLE_READER"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: "Читатель"})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
