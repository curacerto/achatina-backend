import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

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

  @Post('transfer')
  async transfer(
    @Body('senderId') senderId: string,
    @Body('receiverId') receiverId: string,
    @Body('amount') amount: number,
  ) {
    await this.playerService.transfer(senderId, receiverId, amount);
  }
}
