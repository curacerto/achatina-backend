import { Body, Controller, Post } from '@nestjs/common';
import { PlayerSoulService } from './player-soul.service';
import { PlayerSoul } from './player-soul.entity';

@Controller('player-soul')
export class PlayerSoulController {
  constructor(private readonly playerSoulService: PlayerSoulService) {
  }

  @Post()
  createOrUpdate(@Body() body: PlayerSoul) {
    return this.playerSoulService.createOrUpdate(body);
  }
}