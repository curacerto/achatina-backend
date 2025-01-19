import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {

  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
  }

  async updateMsgId(id: number, msgId: string): Promise<Admin> {
    await this.adminRepository.update(id, { msg_id: msgId });
    return this.adminRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }
}