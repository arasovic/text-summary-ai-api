# Text Summarization API

This API is a NestJS application that uses the mT5-small model for text summarization.

## Features

- Text summarization
- Multi-language support (101 languages)
- Offline functionality
- Lightweight model (mT5-small)

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
  "content": "The text you want to summarize will go here. This text can be in any language, the model will automatically detect and summarize it.",
  "language": "en"  // Optional, default is "en"
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
    "content": "Text you want to summarize",
    "language": "en"
  }'
```

## Technical Details

- Model: google/mt5-small
- Framework: NestJS
- Model Library: @xenova/transformers
