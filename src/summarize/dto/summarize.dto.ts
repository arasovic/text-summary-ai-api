import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class SummarizeDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  language?: string = 'en'; // Default language is English
}
