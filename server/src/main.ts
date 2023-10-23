import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { BE_PORT, NODE_ENV, NPM_PACKAGE_VERSION } from '@/configs/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  const SWAGGER_ENVS = ['local', 'dev', 'staging'];

  if (SWAGGER_ENVS.includes(NODE_ENV)) {
    const config = new DocumentBuilder()
      .setTitle('Rantir')
      .setDescription('All the API documentation will be done here')
      .setVersion('1.01')
      .addTag('Rantir')
      .addBearerAuth()
      .build();

    const options: SwaggerDocumentOptions = {
      operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
    };

    const document = SwaggerModule.createDocument(app, config, options);
    SwaggerModule.setup('api/swagger/documentation', app, document);
  }

  await app.listen(BE_PORT || 8080);
}
bootstrap();
