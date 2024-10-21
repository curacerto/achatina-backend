import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatCategory } from './entities/stat-category.entity';

@Injectable()
export class StatCategoryService {

  constructor(
    @InjectRepository(StatCategory)
    private statCategoryRepository: Repository<StatCategory>,
  ) {
  }

  findAll(): Promise<StatCategory[]> {
    return this.statCategoryRepository.find();
  }
}
