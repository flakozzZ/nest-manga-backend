import {BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {User} from "@/users/users.model";
import {Role} from "@/role/role.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number
}
