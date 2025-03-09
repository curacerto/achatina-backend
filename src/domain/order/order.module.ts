import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PlayerSoulCalculatorService } from '../player-soul/player-soul-calculator.service';
import { PlayerSoul } from '../player-soul/player-soul.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    TypeOrmModule.forFeature([PlayerSoul]),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    PlayerSoulCalculatorService,
  ],
})
export class OrderModule {
}
