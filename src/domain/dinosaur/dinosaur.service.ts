import { HttpException, Injectable } from '@nestjs/common';
import { CreateDinosaurDto, UpdateDinosaurDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dinosaur } from './entities/dinosaur.entity';

@Injectable()
export class DinosaurService {

  constructor(
    @InjectRepository(Dinosaur)
    private dinosaurRepository: Repository<Dinosaur>,
  ) {
  }

  create(createDinosaurDto: CreateDinosaurDto): Promise<Dinosaur> {
    return this.dinosaurRepository.save(createDinosaurDto);
  }

  findAll(): Promise<Dinosaur[]> {
    return this.dinosaurRepository.find();
  }

  findOne(id: number): Promise<Dinosaur> {
    const dinosaur = this.dinosaurRepository.findOne({ where: { id } });
    if (!dinosaur) {
      throw new HttpException('Dinosaur not found', 404);
    }
    return dinosaur;
  }

  async update(id: number, updateDinosaurDto: UpdateDinosaurDto) {
    await this.dinosaurRepository.update(id, updateDinosaurDto);
    return this.dinosaurRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.dinosaurRepository.delete(id);
  }
}
