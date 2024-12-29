import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { Transfer } from './entities/transfer.entity';
import { TransferService } from './transfer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transfer]), HttpModule],
  controllers: [],
  providers: [TransferService],
})
export class TransferModule {}
