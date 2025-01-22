import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kit } from './entities/kit.entity';
import { KitController } from './kit.controller';
import { KitService } from './kit.service';
import { KitItem } from './entities/kit-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kit]),
    TypeOrmModule.forFeature([KitItem]),
  ],
  controllers: [KitController],
  providers: [KitService],
})
export class KitModule {
}