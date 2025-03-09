import { Module } from '@nestjs/common';
import { SummarizeModule } from './summarize/summarize.module.js';

@Module({
  imports: [SummarizeModule],
})
export class AppModule {}
