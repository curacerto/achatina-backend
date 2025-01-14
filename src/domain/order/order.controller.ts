import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';
import { Order } from './entities/order.entity';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Order>) {
    return this.orderService.update(id, updateData);
  }
}
