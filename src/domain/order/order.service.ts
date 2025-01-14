import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto';
import { StatusEnumerator } from './constant/status.enumerator';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  getMapPendingOrdersByPlayerId(player_id: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: {
        player_id: player_id,
        status: StatusEnumerator.status.MAP_PENDING,
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
