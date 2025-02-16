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
    orderId: number,
  ): Promise<void> {
    const sender: Player = await this.playerRepository.findOne({
      where: { discordId: senderId },
    });
    const receiver: Player = await this.playerRepository.findOne({
      where: { discordId: receiverId },
    });

    const sourceBefore = sender.balance;
    const sourceAfter = sender.balance - amount;
    const targetBefore = receiver.balance;
    const targetAfter = receiver.balance + amount;

    console.log('Transfer', senderId, receiverId, amount, transferType, sourceBefore, sourceAfter, targetBefore, targetAfter);

    const transfer = new Transfer();
    transfer.source_id = sender.id;
    transfer.target_id = receiver.id;
    transfer.amount = amount;
    transfer.transfer_type = transferType;
    transfer.order_id = orderId;
    transfer.source_before = sourceBefore;
    transfer.source_after = sourceAfter;
    transfer.target_before = targetBefore;
    transfer.target_after = targetAfter;

    await this.transferRepository.save(transfer);
  }
}
