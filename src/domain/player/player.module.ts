import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayerService } from './player.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [],
  providers: [PlayerService],
})
export class PlayerModule {
}