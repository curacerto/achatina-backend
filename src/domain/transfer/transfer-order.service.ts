import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../player/entities/player.entity';
import { Order } from '../order/entities/order.entity';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransferOrderService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepository: Repository<Transfer>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {
  }

  async compareAndFixTransfers(): Promise<void> {
    const transfers = await this.transferRepository.find({ where: { transfer_type: 'order' } });
    const discrepancies = [];

    for (const transfer of transfers) {
      const order = await this.orderRepository.findOne({ where: { id: transfer.order_id } });
      const player = await this.playerRepository.findOne({ where: { id: transfer.source_id } });
      if (order && order.total !== transfer.amount) {
        console.log('Discrepancy', transfer.id, player.name, order.total, transfer.amount);
        discrepancies.push({ order, transfer });
      }

      for (const { order, transfer } of discrepancies) {
        transfer.amount = order.total;
        await this.transferRepository.save(transfer);
      }
    }
  }
}
