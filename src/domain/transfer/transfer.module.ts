import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Transfer } from './entities/transfer.entity';
import { TransferService } from './transfer.service';
import { Player } from '../player/entities/player.entity';
import { TransferOrderService } from './transfer-order.service';
import { Order } from '../order/entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transfer]),
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Order]),
    HttpModule,
  ],
  controllers: [],
  providers: [TransferService, TransferOrderService],
})
export class TransferModule {}
