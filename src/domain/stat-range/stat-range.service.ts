import { Injectable } from '@nestjs/common';
import { CreateStatRangeDto } from './dto/create-stat-range.dto';
import { UpdateStatRangeDto } from './dto/update-stat-range.dto';

@Injectable()
export class StatRangeService {
  create(createStatRangeDto: CreateStatRangeDto) {
    return 'This action adds a new statRange';
  }

  findAll() {
    return `This action returns all statRange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statRange`;
  }

  update(id: number, updateStatRangeDto: UpdateStatRangeDto) {
    return `This action updates a #${id} statRange`;
  }

  remove(id: number) {
    return `This action removes a #${id} statRange`;
  }
}
