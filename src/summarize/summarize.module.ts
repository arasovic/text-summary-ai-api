import { Module } from '@nestjs/common';
import { SummarizeController } from './summarize.controller.js';
import { SummarizeService } from './summarize.service.js';
import { TransformerService } from './model/transformer.service.js';

@Module({
  controllers: [SummarizeController],
  providers: [SummarizeService, TransformerService],
})
export class SummarizeModule {}
