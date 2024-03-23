import {BelongsToMany, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Role} from "@/role/role.model";
import {UserRoles} from "@/user-roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}
