import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    HttpModule
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {
}