import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto';
import { PlayerSoulCalculatorService } from '../player-soul/player-soul-calculator.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private playerSoulCalculatorService: PlayerSoulCalculatorService,
  ) {
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderCreated = this.orderRepository.create(createOrderDto);
    console.log('OrderCreated: ', orderCreated);
    const orderSaved = await this.orderRepository.save(orderCreated);
    console.log('OrderSaved: ', orderSaved);
    if (orderSaved.kit_id === 1 || orderSaved.kit_id === 2) {
      console.log('Calculating player soul');
      await this.playerSoulCalculatorService.calculatePlayerSoul(orderSaved.player_id);
    }
    return orderSaved;
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
