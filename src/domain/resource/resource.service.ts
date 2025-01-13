import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from './entities/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  findAll(): Promise<Resource[]> {
    return this.resourceRepository.find();
  }

  async update(
    idString: string,
    updateData: Partial<Resource>,
  ): Promise<Resource> {
    const id: number = parseInt(idString);
    await this.resourceRepository.update(id, updateData);
    return this.resourceRepository.findOne({ where: { id } });
  }
}
