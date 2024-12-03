import { Controller, Get } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) { }

  @Get()
  async findAll() {
    return this.pdfService.findAll()
  }
}
