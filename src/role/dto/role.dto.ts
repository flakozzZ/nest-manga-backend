import {ApiProperty} from "@nestjs/swagger";

export class RoleDto {

    @ApiProperty({example: "ROLE_READER"})
    readonly value: string

    @ApiProperty({example: "Читатель"})
    readonly description: string
}
