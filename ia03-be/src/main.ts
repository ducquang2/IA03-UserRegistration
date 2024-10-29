import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: [
      'https://ia-03-user-registration.vercel.app',
      /\.ia-03-user-registration\.vercel\.app$/,
    ],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
