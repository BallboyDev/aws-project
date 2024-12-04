export class FindOnePdfReqDto {
    fileName: string
}

export class FindOnePdfResDto {
    pdfStream: Buffer
    fileName: string
}