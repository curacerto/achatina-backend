import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { HttpModule } from '@nestjs/axios';
import { Transfer } from '../transfer/entities/transfer.entity';
import { TransferService } from '../transfer/transfer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    TypeOrmModule.forFeature([Transfer]),
    HttpModule,
  ],
  controllers: [PlayerController],
  providers: [PlayerService, TransferService],
})
export class PlayerModule {}
