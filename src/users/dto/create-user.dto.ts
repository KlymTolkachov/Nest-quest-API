import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'User Email'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Invalid email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'User Password'})
    @IsString({message: 'Must be a string'})
    @Length(6,24, {message: 'Min 6 and Max 24 symbols'})
    readonly password: string;
}