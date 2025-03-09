import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Get the port from environment variables or default to 3000
  const port = process.env.PORT || 3000;
  
  console.log('\n🚀 Starting SumExten Backend Server...');
  console.log('----------------------------------------');
  
  await app.listen(port);
  
  console.log(`
📡 Server Information:
----------------------------------------
🌍 Server URL: http://localhost:${port}
🛠  Environment: ${process.env.NODE_ENV || 'development'}
----------------------------------------

🔌 Available Endpoints:
----------------------------------------
POST /summarize - Text summarization endpoint
GET /health - Server health check
----------------------------------------

💡 Server is ready to accept connections!
  `);
}
bootstrap();
