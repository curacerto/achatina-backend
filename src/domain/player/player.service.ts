import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom } from 'rxjs';
import { TransferService } from '../transfer/transfer.service';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly transferService: TransferService,
  ) {}

  findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne({ where: { id } });
  }

  findByDiscordId(discordId: string): Promise<Player> {
    return this.playerRepository.findOne({ where: { discordId } });
  }

  async findByDiscordIdAndUpdate(discordId: string): Promise<Player> {
    try {
      const response = await lastValueFrom(
        this.getDiscordUser(discordId).pipe(
          catchError((error) => {
            console.error('Error fetching Discord user:', error);
            throw error;
          }),
        ),
      );
      console.log(response.data);

      const player = await this.playerRepository.findOne({
        where: { discordId },
      });
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
        await this.playerRepository.save(player);
      }
      return player;
    } catch (error) {
      console.error('Subscription error:', error);
    }
  }

  getDiscordUser(discordId: string) {
    const api_key = this.configService.get('ASA_BOT_API_KEY');
    return this.httpService.get(
      `https://asa-bot.info/api/public/playerRegistration/discordId/${discordId}`,
      {
        headers: {
          Authorization: `BOT ${api_key}`,
        },
      },
    );
  }

  async transfer(
    senderId: string,
    receiverId: string,
    amount: number,
    transferType: string,
  ): Promise<void> {
    console.log('Transfer', senderId, receiverId, amount, transferType);
    const sender: Player = await this.playerRepository.findOne({
      where: { discordId: senderId },
    });
    const receiver: Player = await this.playerRepository.findOne({
      where: { discordId: receiverId },
    });

    if (!sender) {
      throw new HttpException('Sender not found', 404);
    }
    if (!receiver) {
      throw new HttpException('Receiver not found', 404);
    }
    if (sender.balance < amount) {
      throw new HttpException('Insufficient balance', 400);
    }
    if (senderId === receiverId) {
      throw new HttpException('Sender cannot be receiver', 400);
    }
    if (amount < 0) {
      throw new HttpException('Amount cannot be negative', 400);
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await this.playerRepository.save(sender);
    await this.playerRepository.save(receiver);
    await this.transferService.transfer(
      senderId,
      receiverId,
      amount,
      transferType,
    );
  }
}
