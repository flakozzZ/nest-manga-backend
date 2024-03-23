import {BelongsToMany, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {User} from "@/users/users.model";
import {UserRoles} from "@/user-roles/user-roles.model";

interface RoleCreationAttrs {
    value: string
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}
