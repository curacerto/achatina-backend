import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { getTypeOrmConfig } from './infrastructure/config';
import { ResourceModule } from './domain/resource/resource.module';
import { ResourceInitializerModule } from './initializer/resource-initializer.module';

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
    ResourceModule,
    ResourceInitializerModule,
  ],
})
export class InitModule {}
