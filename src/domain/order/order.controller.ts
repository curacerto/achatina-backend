import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';
import { Order } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('player/:player_id/status')
  getMapPendingOrdersByPlayerId(
    @Param('player_id') player_id: number,
    @Query('status') status: string,
  ): Promise<Order[]> {
    const statusList = status.split(',');
    return this.orderService.getStatusOrdersByPlayerId(player_id, statusList);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Order>) {
    return this.orderService.update(id, updateData);
  }
}
