import { Controller, Get, Param } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { FindAllPdfResDto } from './dto/findAll-pdf.dto';
import { FindOnePdfResDto } from './dto/findOne-pdf.dto';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) { }

  @Get()
  async findAll(): Promise<FindAllPdfResDto> {
    return this.pdfService.findAll()
  }

  @Get(':fileName')
  async findOne(@Param('fileName') fileName: string): Promise<FindOnePdfResDto> {
    return this.pdfService.findOne(fileName)
  }
}
