import { Body, Controller, Post, Get } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ContainerService } from '../container/container.service';

@Controller('exam')
export class ExamController {
    constructor(
        private readonly examService: ExamService,
        private readonly containerService: ContainerService
    ) { }

    @Get('')
    async exam(): Promise<string> {
        return 'exam controller'
    }

    // curl -X POST -H "Content-Type: application/json" -d '{"lang": "javascript", "code": "console.log(\"test\")"}' localhost:3000/exam/submit
    @Post("submit")
    async submit(@Body() body: { lang: string, code: string }): Promise<{ loginId: string | null, fileName: string | null, msg: string }> {
        const saveResult = await this.examService.submit(body.lang, body.code);

        const { id, fileName, ext, msg } = saveResult

        const executeResult = await this.containerService.runContainer(`container_${ext?.replace('.', '')}:latest`, fileName || 'test.js')

        return { loginId: null, fileName: null, msg: 'test' }
    }
}
