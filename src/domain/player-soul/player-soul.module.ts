import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerSoul } from './player-soul.entity';
import { PlayerSoulController } from './player-soul.controller';
import { PlayerSoulService } from './player-soul.service';
import { PlayerSoulCalculatorService } from './player-soul-calculator.service';
import { Order } from '../order/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerSoul]),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [PlayerSoulController],
  providers: [
    PlayerSoulService,
    PlayerSoulCalculatorService,
  ],
})
export class PlayerSoulModule {
}