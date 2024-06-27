import { Injectable } from '@nestjs/common';
import { CreateStatCountDto } from './dto/create-stat-count.dto';
import { UpdateStatCountDto } from './dto/update-stat-count.dto';

@Injectable()
export class StatCountService {
  create(createStatCountDto: CreateStatCountDto) {
    return 'This action adds a new statCount';
  }

  findAll() {
    return `This action returns all statCount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statCount`;
  }

  update(id: number, updateStatCountDto: UpdateStatCountDto) {
    return `This action updates a #${id} statCount`;
  }

  remove(id: number) {
    return `This action removes a #${id} statCount`;
  }
}
