import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //@가 없는 속성은 제거 되어 저장
      forbidNonWhitelisted: true, // 없는 속성이기 때문에 HttpException를 보냄
      transform: true, //자동형변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
