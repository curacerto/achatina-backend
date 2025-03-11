import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    console.log('CreateOrderDto: ', createOrderDto);
    const order = this.orderRepository.create(createOrderDto);
    console.log('Created CreateOrderDto: ', order);
    const id = order.id;
    return this.orderRepository.findOne({ where: { id } });
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
