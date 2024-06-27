import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { categoryProviders } from './category.providers';

@Module({
  controllers: [CategoryController],
  providers: [
    ...categoryProviders,
    CategoryService,
    CategoryRepository,
  ],
})
export class CategoryModule {
}