import { Injectable } from '@nestjs/common';
import { CreateDinosaurCategoryDto } from './dto/create-dinosaur-category.dto';
import { UpdateDinosaurCategoryDto } from './dto/update-dinosaur-category.dto';
import { DinosaurCategory } from './entities/dinosaur-category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DinosaurCategoryService {

  constructor(
    @InjectRepository(DinosaurCategory)
    private readonly dinosaurCategoryRepository: Repository<DinosaurCategory>,
  ) {
  }

  create(createDinosaurCategoryDto: CreateDinosaurCategoryDto): Promise<DinosaurCategory> {
    return this.dinosaurCategoryRepository.save(createDinosaurCategoryDto);
  }

  findAll(): Promise<DinosaurCategory[]> {
    return this.dinosaurCategoryRepository.find();
  }

  findOne(id: number) {
    return this.dinosaurCategoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDinosaurCategoryDto: UpdateDinosaurCategoryDto): Promise<DinosaurCategory> {
    await this.dinosaurCategoryRepository.update(id, updateDinosaurCategoryDto);
    return this.dinosaurCategoryRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.dinosaurCategoryRepository.delete(id);
  }
}
