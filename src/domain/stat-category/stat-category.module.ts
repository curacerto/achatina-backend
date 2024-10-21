import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatCategory } from './entities/stat-category.entity';
import { StatCategoryController } from './stat-category.controller';
import { StatCategoryService } from './stat-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([StatCategory])],
  controllers: [StatCategoryController],
  providers: [StatCategoryService],
})
export class StatCategoryModule {
}