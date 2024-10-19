import { Module } from '@nestjs/common';
import { PriceTableController } from './price-table.controller';
import { PriceTableService } from './price-table.service';
import { PriceTableRepository } from './price-table.repository';

@Module({
  controllers: [PriceTableController],
  providers: [PriceTableService, PriceTableRepository],
})
export class PriceTableModule {
}