import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom } from 'rxjs';

@Injectable()
export class PlayerService {

  constructor(
    @InjectRepository(Player)
    private readonly userRepository: Repository<Player>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
  }

  findAll(): Promise<Player[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Player> {
    return this.userRepository.findOne({ where: { id } });
  }

  findByDiscordId(discordId: string): Promise<Player> {
    return this.userRepository.findOne({ where: { discordId } });
  }

  async findByDiscordIdAndUpdate(discordId: string): Promise<Player> {
    try {
      const response = await lastValueFrom(
        this.getDiscordUser(discordId).pipe(
          catchError(error => {
            console.error('Error fetching Discord user:', error);
            throw error;
          }),
        ),
      );
      console.log(response.data);

      const player = await this.userRepository.findOne({ where: { discordId } });
      if (player) {
        if (!player.arkId && response.data.netId) {
          player.arkId = response.data.netId;
        }
        if (!player.discordId && response.data.discordId) {
          player.discordId = response.data.discordId;
        }
        if (!player.name && response.data.discordUsername) {
          player.name = response.data.discordUsername;
        }
        await this.userRepository.save(player);
      }
      return player;
    } catch (error) {
      console.error('Subscription error:', error);
    }
  }

  getDiscordUser(discordId: string) {
    let api_key = this.configService.get('API_KEY');
    return this.httpService.get(`https://asa-bot.info/api/public/playerRegistration/discordId/${discordId}`, {
      headers: {
        Authorization: `BOT ${api_key}`,
      },
    });
  }

}
