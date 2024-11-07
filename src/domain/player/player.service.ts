import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {

  constructor(
    @InjectRepository(Player)
    private readonly userRepository: Repository<Player>,
  ) {
  }

  findAll(): Promise<Player[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Player> {
    return this.userRepository.findOne({ where: { id } });
  }

}
