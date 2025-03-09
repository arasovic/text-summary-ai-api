# Text Summarization API
This API is a NestJS application that uses the BART-Large-CNN model for text summarization, specifically optimized for news article summarization and general text condensation.

## Features
- High-quality text summarization
- Optimized for news articles and long-form content
- English language support
- State-of-the-art summarization model
- Built on proven transformer architecture

## Installation
```bash
npm install
```

## Running the Application
```bash
npm run start:dev
```

## API Usage
### Text Summarization
**Endpoint:** `POST /api/summarize`

**Request:**
```json
{
  "content": "The text you want to summarize will go here. This can be a news article, blog post, or any long-form content that needs summarization."
}
```

**Response:**
```json
{
  "summary": "The summarized text will be here."
}
```

## Example Usage (cURL)
```bash
curl -X POST http://localhost:3000/api/summarize \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Text you want to summarize"
  }'
```

## Technical Details
- Model: Xenova/bart-large-cnn
- Framework: NestJS
- Model Library: @xenova/transformers

## About the Model
BART-Large-CNN is a state-of-the-art model for text summarization, fine-tuned specifically on CNN news articles. It excels at:
- Generating concise and coherent summaries
- Maintaining key information from source text
- Producing human-readable output
- Handling various types of content, particularly news articles
