import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kit } from './entities/kit.entity';
import { KitController } from './kit.controller';
import { KitService } from './kit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kit]),
  ],
  controllers: [KitController],
  providers: [KitService],
})
export class KitModule {
}