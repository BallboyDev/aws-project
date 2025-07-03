import { Body, Controller, Post } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
    constructor(private readonly examService: ExamService) { }

    // curl -X POST -H "Content-Type: application/json" -d '{"lang": "js", "code": "console.log(\"test\")"}' localhost:3000/exam
    @Post("submit")
    async submit(@Body() body: { lang: string, code: string }): Promise<string> {
        return await this.examService.submit(body.lang, body.code);
    }
}
