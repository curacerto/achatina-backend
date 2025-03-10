import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto';
import { PlayerSoulCalculatorService } from '../player-soul/player-soul-calculator.service';
import { PlayerSoul } from '../player-soul/player-soul.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private playerSoulCalculatorService: PlayerSoulCalculatorService,
  ) {
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);
    const newOrder = await this.orderRepository.save(order);
    if (order.kit_id === 1 || order.kit_id === 2) {
      await this.playerSoulCalculatorService.calculatePlayerSoul(order.player_id);
    }
    return newOrder;
  }

  getStatusOrdersByPlayerId(
    player_id: number,
    status: string[],
  ): Promise<Order[]> {
    return this.orderRepository.find({
      where: {
        player_id: player_id,
        status: In(status),
      },
    });
  }

  async update(idString: string, updateData: Partial<Order>): Promise<Order> {
    const id: number = parseInt(idString);

    if (!updateData || Object.keys(updateData).length === 0) {
      throw new BadRequestException('No update data provided');
    }

    await this.orderRepository
      .createQueryBuilder()
      .update(Order)
      .set(updateData)
      .where('id = :id', { id })
      .execute();

    return this.orderRepository.findOne({ where: { id } });
  }
}
