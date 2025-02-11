import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {
  }

  async findByName(name: string): Promise<Item> {
    return await this.itemRepository.findOne({ where: { name } });
  }

  async findById(id: number): Promise<Item> {
    return await this.itemRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async findByQueryParams(queryParams: any): Promise<Item[]> {
    return await this.itemRepository.find({ where: queryParams });
  }
}