import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PriceTableRepository {
  manager: any;

  constructor(private dataSource: DataSource) {
    this.manager = this.dataSource.manager;
  }

  findAll() {
    let query =
      'SELECT drc.id, ' +
      '       drc.stat_range_id, ' +
      '       sr.name as stat_range_name, ' +
      '       sr.minimum, ' +
      '       sr.maximum, ' +
      '       drc.stat_count_id, ' +
      '       sc.name as stat_count_name, ' +
      '       sc.stat_count, ' +
      '       drc.minimum as minimum_price ' +
      'FROM dino_range_count drc ' +
      'INNER JOIN stat_range sr ON drc.stat_range_id = sr.id ' +
      'INNER JOIN stat_count sc ON drc.stat_count_id = sc.id ';


    return this.manager.query(query);
  }

}