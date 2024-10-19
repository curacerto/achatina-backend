import { PriceTableDinoStatCountDto } from './price-table-dino-stat-count.dto';

export class PriceTableDinoDto {
  dinosaur_id: number;
  dinosaur_name: string;
  stat_category_id: number;
  stat_category_name: string;
  stats_count: PriceTableDinoStatCountDto[];
}