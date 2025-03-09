import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PlayerSoulCalculatorService } from './domain/player-soul/player-soul-calculator.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const playerSoulCalculatorService = app.get(PlayerSoulCalculatorService);

  await playerSoulCalculatorService.calculatePlayerSoul(null);

  await app.close();
}

bootstrap();