import { Module } from '@nestjs/common';
import { StatCountService } from './stat-count.service';
import { StatCountController } from './stat-count.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatCount } from './entities/stat-count.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatCount])],
  controllers: [StatCountController],
  providers: [StatCountService],
})
export class StatCountModule {
}
