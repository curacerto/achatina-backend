import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
  }

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    const category = this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new HttpException('Category not found', 404);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    this.categoryRepository.create(updateCategoryDto);
    return this.categoryRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.categoryRepository.delete(id);
  }
}
