import { Module } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { DinosaurController } from './dinosaur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dinosaur } from './entities/dinosaur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dinosaur])],
  controllers: [DinosaurController],
  providers: [DinosaurService],
})
export class DinosaurModule {
}
