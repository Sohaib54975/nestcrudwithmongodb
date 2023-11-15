import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();


// The @nestjs/common/pipes module 
// in Nest.js provides a set of built-in pipes that are used for handling data transformation and validation in the request processing pipeline.
//  Pipes play a crucial role in transforming incoming data (from the client to the server) and outgoing data (from the server to the client). 
// They can also be used for validation and sanitization of data.
