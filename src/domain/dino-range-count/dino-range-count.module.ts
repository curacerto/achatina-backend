import { Module } from '@nestjs/common';
import { DinoRangeCountService } from './dino-range-count.service';
import { DinoRangeCountController } from './dino-range-count.controller';

@Module({
  controllers: [DinoRangeCountController],
  providers: [DinoRangeCountService],
})
export class DinoRangeCountModule {}
