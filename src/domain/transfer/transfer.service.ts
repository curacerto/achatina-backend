import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../player/entities/player.entity';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepository: Repository<Transfer>,
    private readonly playerRepository: Repository<Player>,
  ) {}

  async transfer(
    senderId: string,
    receiverId: string,
    amount: number,
  ): Promise<void> {
    console.log('Transfer', senderId, receiverId, amount);
    const sender: Player = await this.playerRepository.findOne({
      where: { discordId: senderId },
    });
    const receiver: Player = await this.playerRepository.findOne({
      where: { discordId: receiverId },
    });

    const transfer = new Transfer();
    transfer.source_id = sender.id;
    transfer.target_id = receiver.id;
    transfer.amount = amount;

    await this.transferRepository.save(transfer);
  }
}
