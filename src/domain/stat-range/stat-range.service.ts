import { Injectable } from '@nestjs/common';
import { CreateStatRangeDto, UpdateStatRangeDto } from './dto';
import { StatRange } from './entities/stat-range.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatRangeService {

  constructor(
    @InjectRepository(StatRange)
    private readonly statRangeRepository: Repository<StatRange>,
  ) {
  }

  create(createStatRangeDto: CreateStatRangeDto): Promise<StatRange> {
    return this.statRangeRepository.save(createStatRangeDto);
  }

  findAll(): Promise<StatRange[]> {
    return this.statRangeRepository.find();
  }

  findOne(id: number): Promise<StatRange> {
    return this.statRangeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateStatRangeDto: UpdateStatRangeDto): Promise<StatRange> {
    await this.statRangeRepository.update(id, updateStatRangeDto);
    return this.statRangeRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.statRangeRepository.delete(id);
  }
}
