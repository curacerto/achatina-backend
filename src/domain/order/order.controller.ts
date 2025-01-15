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

  @Get('player/:player_id/status/:status')
  getMapPendingOrdersByPlayerId(
    player_id: number,
    status: string,
  ): Promise<Order[]> {
    return this.orderService.getStatusOrdersByPlayerId(player_id, status);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Order>) {
    return this.orderService.update(id, updateData);
  }
}
