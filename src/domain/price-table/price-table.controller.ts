import { Controller, Get, Param } from '@nestjs/common';
import { PriceTableService } from './price-table.service';

@Controller('price-table')
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {
  }

  @Get()
  findAll() {
    return this.priceTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceTableService.findOne(+id);
  }
}
