import { Injectable } from '@nestjs/common';
import { CreateDinoRangeCountDto } from './dto/create-dino-range-count.dto';
import { UpdateDinoRangeCountDto } from './dto/update-dino-range-count.dto';

@Injectable()
export class DinoRangeCountService {
  create(createDinoRangeCountDto: CreateDinoRangeCountDto) {
    return 'This action adds a new dinoRangeCount';
  }

  findAll() {
    return `This action returns all dinoRangeCount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dinoRangeCount`;
  }

  update(id: number, updateDinoRangeCountDto: UpdateDinoRangeCountDto) {
    return `This action updates a #${id} dinoRangeCount`;
  }

  remove(id: number) {
    return `This action removes a #${id} dinoRangeCount`;
  }
}
