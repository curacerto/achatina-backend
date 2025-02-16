import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransferOrderService } from './domain/transfer/transfer-order.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const transferOrderService = app.get(TransferOrderService);

  await transferOrderService.compareAndFixTransfers();

  await app.close();
}

bootstrap();
