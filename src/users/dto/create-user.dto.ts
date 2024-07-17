import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'User Email'})
    readonly email: string;

    @ApiProperty({example: '12345678', description: 'User Password'})
    readonly password: string;
}