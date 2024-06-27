import { Module } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { DinosaurController } from './dinosaur.controller';

@Module({
  controllers: [DinosaurController],
  providers: [DinosaurService],
})
export class DinosaurModule {
}
