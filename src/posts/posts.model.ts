import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: 'uniq identification'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Example post title', description: 'Post title'})
    @Column({type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({example: 'Example post text', description: 'Post content'})
    @Column({type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({example: 'www.path-to-image.com/1', description: 'Path to image'})
    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: string

    @BelongsTo(() => User)
    author: User;
}