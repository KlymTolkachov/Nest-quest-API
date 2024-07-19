import {Model, DataType, Table, Column, BelongsToMany, HasMany} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
 export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'uniq identification'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'User Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '12345678', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'false', description: 'is user banned'})
    @Column({type: DataType.BOOLEAN,  defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'misbehavior', description: 'the reason for the ban'})
    @Column({type: DataType.STRING,  allowNull: true})
    banReason: string;

    @BelongsToMany(()=> Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}