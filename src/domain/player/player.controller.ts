import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto';

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

  @Post('transfer')
  async transfer(
    @Body('senderId') senderId: string,
    @Body('receiverId') receiverId: string,
    @Body('amount') amount: number,
    @Body('transferType') transferType: string,
    @Body('orderId') orderId: number,
  ) {
    await this.playerService.transfer(
      senderId,
      receiverId,
      amount,
      transferType,
      orderId,
    );
  }

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }
}
