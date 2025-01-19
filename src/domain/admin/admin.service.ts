import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminService {

  private readonly adminId: string = 'ADMIN';

  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
  }

  async updateMsgId(msgId: string): Promise<Admin> {
    await this.adminRepository.update({ admin_id: this.adminId }, { msg_id: msgId });
    return this.adminRepository.findOne({ where: { admin_id: this.adminId } });
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }
}