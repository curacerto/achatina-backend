import { Module } from '@nestjs/common';
import { DinosaurCategoryService } from './dinosaur-category.service';
import { DinosaurCategoryController } from './dinosaur-category.controller';

@Module({
  controllers: [DinosaurCategoryController],
  providers: [DinosaurCategoryService],
})
export class DinosaurCategoryModule {}
