import { Injectable } from '@nestjs/common';
import { CreateDinosaurCategoryDto } from './dto/create-dinosaur-category.dto';
import { UpdateDinosaurCategoryDto } from './dto/update-dinosaur-category.dto';

@Injectable()
export class DinosaurCategoryService {
  create(createDinosaurCategoryDto: CreateDinosaurCategoryDto) {
    return 'This action adds a new dinosaurCategory';
  }

  findAll() {
    return `This action returns all dinosaurCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dinosaurCategory`;
  }

  update(id: number, updateDinosaurCategoryDto: UpdateDinosaurCategoryDto) {
    return `This action updates a #${id} dinosaurCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} dinosaurCategory`;
  }
}
