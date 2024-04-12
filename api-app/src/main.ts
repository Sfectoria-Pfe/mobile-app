import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app =await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setGlobalPrefix('/api/v1');
  app.enableCors({ origin: '*' });
  
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets('upload',{prefix:'/upload'})
 

  const config = new DocumentBuilder()
    .setTitle('SFECTORIA example')
    .setDescription('The SFECTORIA API description')
    .setVersion('1.0')
    .addApiKey({type:'apiKey',name:'Authorization',in:'header'},'apiKey')
    .addTag('SFECTORIA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(5000);
}

bootstrap();
