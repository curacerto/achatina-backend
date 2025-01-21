import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerSoul } from './player-soul.entity';

@Injectable()
export class PlayerSoulService {
  constructor(
    @InjectRepository(PlayerSoul)
    private readonly playerSoulRepository: Repository<PlayerSoul>,
  ) {
  }

  async create(playerSoul: PlayerSoul): Promise<PlayerSoul> {
    return this.playerSoulRepository.save(playerSoul);
  }

  async update(id: number, playerSoul: Partial<PlayerSoul>): Promise<PlayerSoul> {
    await this.playerSoulRepository.update(id, playerSoul);
    return this.playerSoulRepository.findOne({ where: { id } });
  }

  async findByPlayerId(player_id: number): Promise<PlayerSoul> {
    return this.playerSoulRepository.findOne({ where: { player_id } });
  }

  async createOrUpdate(playerSoul: PlayerSoul): Promise<PlayerSoul> {
    const existingPlayerSoul = await this.findByPlayerId(playerSoul.player_id);
    if (existingPlayerSoul) {
      playerSoul.soul = existingPlayerSoul.soul + playerSoul.soul;
      playerSoul.terminal = existingPlayerSoul.terminal + playerSoul.terminal;
      return this.update(existingPlayerSoul.id, playerSoul);
    }
    return this.create(playerSoul);
  }
}