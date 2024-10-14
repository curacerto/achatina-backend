import { Injectable } from '@nestjs/common';
import { CreateStatCountDto } from './dto/create-stat-count.dto';
import { UpdateStatCountDto } from './dto/update-stat-count.dto';
import { StatCount } from './entities/stat-count.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatCountService {

  constructor(
    @InjectRepository(StatCount)
    private statCountRepository: Repository<StatCount>,
  ) {
  }

  create(createStatCountDto: CreateStatCountDto) {
    return this.statCountRepository.save(createStatCountDto);
  }

  findAll(): Promise<StatCount[]> {
    return this.statCountRepository.find();
  }

  findOne(id: number): Promise<StatCount> {
    return this.statCountRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStatCountDto: UpdateStatCountDto) {
    await this.statCountRepository.update(id, updateStatCountDto);
    return this.statCountRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.statCountRepository.delete(id);
  }
}
