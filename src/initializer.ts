import { NestFactory } from '@nestjs/core';
import { InitModule } from './init.module';
import { ResourceInitializer } from './initializer/resource.initializer';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(InitModule);
  const resourceInitializer = app.get(ResourceInitializer);
  await resourceInitializer.init();
  await app.close();
}

bootstrap();
