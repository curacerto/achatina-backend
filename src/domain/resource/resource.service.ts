import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Resource } from './entities/resource.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Resource[]> {
    return this.resourceRepository.find();
  }

  findByResourceId(resourceId: string): Promise<Resource> {
    return this.resourceRepository.findOne({
      where: { resource_id: resourceId },
    });
  }

  findById(id: number): Promise<Resource> {
    return this.resourceRepository.findOne({ where: { id } });
  }

  async update(
    idString: string,
    updateData: Partial<Resource>,
  ): Promise<Resource> {
    const id: number = parseInt(idString);

    if (!updateData || Object.keys(updateData).length === 0) {
      throw new BadRequestException('No update data provided');
    }

    await this.dataSource
      .createQueryBuilder()
      .update(Resource)
      .set(updateData)
      .where('id = :id', { id })
      .execute();

    return this.resourceRepository.findOne({ where: { id } });
  }
}
