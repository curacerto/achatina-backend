import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kit } from './entities/kit.entity';
import { KitItem } from './entities/kit-item.entity';
import { KitWithItemsDto } from './dto/kit-with-items.dto';

@Injectable()
export class KitService {
  constructor(
    @InjectRepository(Kit)
    private kitRepository: Repository<Kit>,
    @InjectRepository(KitItem)
    private kitItemRepository: Repository<KitItem>,
  ) {
  }

  async findByName(name: string): Promise<KitWithItemsDto> {
    const kit = await this.kitRepository.findOne({ where: { name } });
    const items = await this.kitItemRepository.find({ where: { kit_id: kit.id } });
    return { ...kit, items };
  }
}