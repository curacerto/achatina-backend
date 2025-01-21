import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerSoul } from './player-soul.entity';
import { PlayerSoulController } from './player-soul.controller';
import { PlayerSoulService } from './player-soul.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlayerSoul]),
  ],
  controllers: [PlayerSoulController],
  providers: [PlayerSoulService],
})
export class PlayerSoulModule {
}