import { PriceTableDto } from './dto/price-table.dto';
import { Injectable } from '@nestjs/common';
import { PriceTableRepository } from './price-table.repository';

@Injectable()
export class PriceTableService {
  constructor(
    private priceTableRepository: PriceTableRepository,
  ) {
  }

  findAll(): Promise<PriceTableDto[]> {
    return this.priceTableRepository.findAll();
  }

}