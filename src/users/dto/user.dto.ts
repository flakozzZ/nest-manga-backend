import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({example: "example@mail.ru"})
    readonly email: string

    @ApiProperty({example: "password"})
    readonly password: string

    readonly refreshToken: string
}
