import { Controller, Post, Body } from '@nestjs/common';
import { SummarizeService } from './summarize.service.js';
import { SummarizeDto } from './dto/summarize.dto.js';

@Controller('api/summarize')
export class SummarizeController {
  constructor(private readonly summarizeService: SummarizeService) {}

  @Post()
  async summarize(@Body() summarizeDto: SummarizeDto): Promise<{ summary: string }> {
    return this.summarizeService.summarize(summarizeDto);
  }
}
