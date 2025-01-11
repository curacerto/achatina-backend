import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from '../domain/resource/entities/resource.entity';
import { ResourceInitializer } from './resource.initializer';

@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  providers: [ResourceInitializer],
})
export class ResourceInitializerModule {}
