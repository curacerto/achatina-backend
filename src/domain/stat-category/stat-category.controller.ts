import { Controller, Get } from '@nestjs/common';
import { StatCategoryService } from './stat-category.service';

@Controller('stat-category')
export class StatCategoryController {
  constructor(private readonly statCategoryService: StatCategoryService) {
  }

  @Get()
  findAll() {
    return this.statCategoryService.findAll();
  }
}
