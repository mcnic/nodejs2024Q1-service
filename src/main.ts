import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();
  const PORT = process.env.PORT ?? 4000;
  const app = await NestFactory.create(AppModule);
  console.info(`Server start on http://localhost:${PORT}`);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('The home library')
    .setDescription('The my home library API')
    .setVersion('1.0')
    .addTag('home-library')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  // const document: OpenAPIObject = jamljs.load('./doc/api.yaml') // lalternative
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      yamlDocumentUrl: '../doc/api.yaml',
    },
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}
bootstrap();
