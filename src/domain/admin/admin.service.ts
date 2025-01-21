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

  async updateMsgId(adminMsgId: string, soulMsgId: string): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { admin_id: this.adminId } });
    console.log('Admin before update:', admin);

    if (!admin) {
      throw new Error(`Admin with id ${this.adminId} not found`);
    }

    admin.admin_msg_id = adminMsgId;
    admin.soul_msg_id = soulMsgId;
    await this.adminRepository.save(admin);
    return this.adminRepository.findOne({ where: { admin_id: this.adminId } });
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }
}