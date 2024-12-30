import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Transfer } from './entities/transfer.entity';
import { TransferService } from './transfer.service';
import { Player } from '../player/entities/player.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transfer]),
    TypeOrmModule.forFeature([Player]),
    HttpModule,
  ],
  controllers: [],
  providers: [TransferService],
})
export class TransferModule {}
