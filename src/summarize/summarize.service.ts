import { Injectable } from '@nestjs/common';
import { TransformerService } from './model/transformer.service.js';
import { SummarizeDto } from './dto/summarize.dto.js';

@Injectable()
export class SummarizeService {
  constructor(private readonly transformerService: TransformerService) {}

  async summarize(summarizeDto: SummarizeDto): Promise<{ summary: string }> {
    const summary = await this.transformerService.summarize(summarizeDto.content);
    return { summary };
  }
}
