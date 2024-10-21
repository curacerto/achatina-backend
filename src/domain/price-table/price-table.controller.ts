import { Controller, Get } from '@nestjs/common';
import { PriceTableService } from './price-table.service';

@Controller('price-table')
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {
  }

  @Get()
  findAll() {
    return this.priceTableService.findAll();
  }
}
