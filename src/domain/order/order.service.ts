import { Injectable } from '@nestjs/common';
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

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.save(createOrderDto);
  }

  getMapPendingOrdersByPlayerId(player_id: number): Promise<Order[]> {
    return this.orderRepository.find({
      where: {
        player_id: player_id,
        status: StatusEnumerator.status.MAP_PENDING,
      },
    });
  }
}
