import { Inject, Injectable } from '@nestjs/common';
import * as Docker from 'dockerode';

@Injectable()
export class ContainerService {
    constructor(
        private readonly docker: Docker
    ) { }

    async startContainer(id: string): Promise<string> {
        try {
            const container = this.docker.getContainer(id);
            await container.start();
            return `Container ${id} started successfully.`;
        } catch (err) {
            console.error(`Error starting container ${id}:`, err);
            throw new Error(`Failed to start container ${id}.`);
        }
    }

    async stopContainer(id: string): Promise<string> {
        try {
            const container = this.docker.getContainer(id);
            await container.stop();
            return `Container ${id} stopped successfully.`;
        } catch (err) {
            console.error(`Error stopping container ${id}:`, err);
            throw new Error(`Failed to stop container ${id}.`);
        }
    }


}
