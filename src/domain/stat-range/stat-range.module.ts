import { Module } from '@nestjs/common';
import { StatRangeService } from './stat-range.service';
import { StatRangeController } from './stat-range.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatRange } from './entities/stat-range.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatRange])],
  controllers: [StatRangeController],
  providers: [StatRangeService],
})
export class StatRangeModule {
}
