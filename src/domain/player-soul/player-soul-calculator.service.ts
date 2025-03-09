import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayerSoul } from './player-soul.entity';
import { Order } from '../order/entities/order.entity';

@Injectable()
export class PlayerSoulCalculatorService {
  constructor(
    @InjectRepository(PlayerSoul)
    private readonly playerSoulRepository: Repository<PlayerSoul>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {
  }

  async calculatePlayerSoul(playerId: number): Promise<void> {
    const orders = await this.orderRepository.find({ where: { kit_id: 1 } });

    const playerSoulMap = orders.reduce((acc, order) => {
      if (!acc[order.player_id]) {
        acc[order.player_id] = 0;
      }
      acc[order.player_id] += 1;
      return acc;
    }, {});

    const orders2 = await this.orderRepository.find({ where: { kit_id: 2 } });

    const playerSoulMap2 = orders2.reduce((acc, order) => {
      if (!acc[order.player_id]) {
        acc[order.player_id] = 0;
      }
      acc[order.player_id] += 1;
      return acc;
    }, {});

    if (playerId) {
      await this.createOrUpdatePlayerSoul(playerId, playerSoulMap[playerId], playerSoulMap2[playerId]);
    } else {
      for (const playerId in playerSoulMap) {
        await this.createOrUpdatePlayerSoul(+playerId, playerSoulMap[+playerId], playerSoulMap2[+playerId]);
      }
    }
  }

  async createOrUpdatePlayerSoul(playerId: number, soul: number, terminal: number): Promise<void> {
    const playerSoul = await this.playerSoulRepository.findOne({ where: { player_id: playerId } });
    if (playerSoul) {
      playerSoul.soul = soul;
      playerSoul.terminal = terminal;
      await this.playerSoulRepository.save(playerSoul);
    } else {
      await this.playerSoulRepository.save({
        player_id: playerId,
        soul,
        terminal,
      });
    }
  }
}