import { Module } from '@nestjs/common';
import { StatCountService } from './stat-count.service';
import { StatCountController } from './stat-count.controller';

@Module({
  controllers: [StatCountController],
  providers: [StatCountService],
})
export class StatCountModule {}
