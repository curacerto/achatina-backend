import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getTypeOrmConfig } from './infrastructure/config';

import { CategoryModule } from './domain/category/category.module';
import { DinosaurModule } from './domain/dinosaur/dinosaur.module';
import { DinosaurCategoryModule } from './domain/dinosaur-category/dinosaur-category.module';
import { DinoRangeCountModule } from './domain/dino-range-count/dino-range-count.module';
import { StatCountModule } from './domain/stat-count/stat-count.module';
import { StatRangeModule } from './domain/stat-range/stat-range.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceTableModule } from './domain/price-table/price-table.module';
import { StatCategoryModule } from './domain/stat-category/stat-category.module';
import { ResourceModule } from './domain/resource/resource.module';
import { PlayerModule } from './domain/player/player.module';
import { OrderModule } from './domain/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    CategoryModule,
    DinosaurModule,
    DinosaurCategoryModule,
    DinoRangeCountModule,
    StatCountModule,
    StatRangeModule,
    PriceTableModule,
    StatCategoryModule,
    ResourceModule,
    PlayerModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
