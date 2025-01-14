import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('map-pending/:player_id')
  getMapPendingOrdersByPlayerId(player_id: number) {
    return this.orderService.getMapPendingOrdersByPlayerId(player_id);
  }
}
