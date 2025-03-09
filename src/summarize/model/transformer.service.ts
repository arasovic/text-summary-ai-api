import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class TransformerService implements OnModuleInit {
  private summarizer;
  private readonly model = 'Xenova/bart-large-cnn';

  async onModuleInit() {
    try {
      const { pipeline } = await import('@xenova/transformers');
      this.summarizer = await pipeline('summarization', this.model);
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to initialize model');
    }
  }

  async summarize(text: string): Promise<string> {
    try {
      const result = await this.summarizer(text, {
        max_length: 150,
        min_length: 40,
        no_repeat_ngram_size: 3,
      });
      return result[0].summary_text;
    } catch (error) {
      console.error('Error creating summary:', error);
      throw new Error('Failed to create summary');
    }
  }
}
