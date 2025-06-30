import { Inject, Injectable } from '@nestjs/common';
import Docker from 'dockerode'

@Injectable()
export class ContainerService {
    constructor(
        @Inject('Docker') private readonly docker: Docker
    ) { }


    startContainer(id: string): string {
        try {

        } catch (err) {

        }

        return 'start conatiner'
    }


}
