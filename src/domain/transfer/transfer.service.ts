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
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

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

    const transfer = new Transfer();
    transfer.source_id = sender.id;
    transfer.target_id = receiver.id;
    transfer.amount = amount;
    transfer.transfer_type = transferType;

    await this.transferRepository.save(transfer);
  }
}
