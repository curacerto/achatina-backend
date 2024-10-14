import { Module } from '@nestjs/common';
import { DinosaurCategoryService } from './dinosaur-category.service';
import { DinosaurCategoryController } from './dinosaur-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DinosaurCategory } from './entities/dinosaur-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DinosaurCategory])],
  controllers: [DinosaurCategoryController],
  providers: [DinosaurCategoryService],
})
export class DinosaurCategoryModule {
}
