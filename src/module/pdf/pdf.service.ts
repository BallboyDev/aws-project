import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream, readdirSync, readFileSync } from 'fs'
import { join } from 'path'

@Injectable()
export class PdfService {
    async findAll() {
        console.log('ballboy GET /pdf findAll()')

        const pdfList = readdirSync(join(process.cwd(), 'pdf'))
        return {
            pdfList: pdfList,
            count: pdfList.length
        }
    }

    async findOne(fileName: string) {
        console.log('ballboy GET /pdf:fileName findOne()')

        const content = readFileSync(join(process.cwd(), 'pdf', fileName))

        return {
            fileName: fileName,
            pdfStream: content
        }
    }
}
