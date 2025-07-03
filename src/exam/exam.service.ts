import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ExamService {
    constructor(private readonly httpService: HttpService) { }

    async submit(lang: string, code: string): Promise<string> {
        const extensions: { [key: string]: string } = {
            'c': 'c',
            'c++': 'cpp',
            'java': 'java',
            'javascript': 'js',
            'python': 'py',
            'sql': 'sql',
        };

        const fileExtension = extensions[lang.toLowerCase()] || 'txt'; // Default to .txt if lang is not recognized
        const filename = `test.${fileExtension}`;
        const formData = new FormData();
        formData.append('file', new Blob([code], { type: 'text/plain' }), filename);

        try {
            const response = await firstValueFrom(this.httpService.post('http://localhost:3100/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }));
            return `File sent successfully. Server response: ${JSON.stringify(response.data)}`;
        } catch (error) {
            console.log(error)
            return `Failed to send file. Error: ${error.message}`;
        }
    }
}
