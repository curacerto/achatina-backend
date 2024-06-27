import { Injectable } from '@nestjs/common';
import { CreateDinosaurDto } from './dto/create-dinosaur.dto';
import { UpdateDinosaurDto } from './dto/update-dinosaur.dto';

@Injectable()
export class DinosaurService {
  create(createDinosaurDto: CreateDinosaurDto) {
    return 'This action adds a new dinosaur';
  }

  findAll() {
    return `This action returns all dinosaur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dinosaur`;
  }

  update(id: number, updateDinosaurDto: UpdateDinosaurDto) {
    return `This action updates a #${id} dinosaur`;
  }

  remove(id: number) {
    return `This action removes a #${id} dinosaur`;
  }
}
