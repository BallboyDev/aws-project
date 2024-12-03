import { isString, IsString, IsStrongPassword } from "class-validator";

export class SigninReqDto {
    @IsString()
    userId: string;

    @IsString()
    pasword: string;
}

export class SigninResDto {
    @IsString()
    result: string

    @IsString()
    url: string
}