import { Module } from '@nestjs/common';
import { StatRangeService } from './stat-range.service';
import { StatRangeController } from './stat-range.controller';

@Module({
  controllers: [StatRangeController],
  providers: [StatRangeService],
})
export class StatRangeModule {}
