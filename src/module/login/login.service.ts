import { Injectable } from '@nestjs/common';
import res from 'src/utils';
import { SigninReqDto, SigninResDto } from './dto/signin.dto';

@Injectable()
export class LoginService {
    async signin(signinReqDto: SigninReqDto) {
        if (signinReqDto.userId === 'ballboyDev') {
            return {
                result: 'success',
                url: '/examinee',
                password: signinReqDto.pasword
            }
        } else if (signinReqDto.userId === 'admin') {
            return {
                result: 'success',
                url: '/admin',
                password: signinReqDto.pasword
            }
        } else {
            return {
                result: 'failure',
                url: '',
                password: signinReqDto.pasword
            }
        }


    }
}