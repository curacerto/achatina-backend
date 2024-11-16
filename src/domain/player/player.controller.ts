import { Controller, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {
  }

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Get('discord/:discordId')
  findByDiscordId(@Param('discordId') discordId: string) {
    return this.playerService.findByDiscordId(discordId);
  }

  @Get('discord/:discordId/update')
  findByDiscordIdAndUpdate(@Param('discordId') discordId: string) {
    return this.playerService.findByDiscordIdAndUpdate(discordId);
  }

}