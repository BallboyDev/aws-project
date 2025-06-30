import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContainerService } from './container.service';

@Controller('container')
export class ContainerController {
    constructor(private readonly service: ContainerService) { }

    @Get()
    getContainer(): string {
        return 'getContainer'
    }

    // start container
    // curl localhost:3000/container/start -X POST -H "Content-Type: application/json" -d '{"id": "1234"}'
    @Post('start')
    startContainer(@Body('id') id: string): string {
        return this.service.startContainer(id)
    }

    // stop container

    // run container
}
