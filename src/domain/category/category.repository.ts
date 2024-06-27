import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryRepository {

  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private repository: Repository<Category>,
  ) {
  }

  async create(category: any): Promise<Category> {
    return this.repository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Category> {
    let idParam = parseInt(id);
    return this.repository.findOne({
      where: { id: idParam },
    });
  }

  async update(id: string, category: Category): Promise<Category> {
    let idParam = parseInt(id);
    await this.repository.update(idParam, category);
    return this.repository.findOne({
      where: { id: idParam },
    });
  }

  async remove(id: string) {
    let idParam = parseInt(id);
    await this.repository.delete(idParam);
  }
}