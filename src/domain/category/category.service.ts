import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

  constructor(private categoryRepository: CategoryRepository) {
  }

  create(category: CategoryDto) {
    return this.categoryRepository.create(category);
  }

  findAll() {
    return this.categoryRepository.findAll();
  }

  findOne(id: string) {
    return this.categoryRepository.findOne(id);
  }

  update(id: string, category: CategoryDto) {
    return this.categoryRepository.update(id, category);
  }

  remove(id: string) {
    return this.categoryRepository.remove(id);
  }

}