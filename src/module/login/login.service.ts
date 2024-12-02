import { Injectable } from '@nestjs/common';
import res from 'src/utils';

@Injectable()
export class LoginService {

    login(userId): object {
        return res[200](userId)
    }
}
