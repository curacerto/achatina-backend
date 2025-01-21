import { Body, Controller, Get, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Patch()
  create(@Body() body: { admin_msg_id: string, soul_msg_id: string }) {
    return this.adminService.updateMsgId(body.admin_msg_id, body.soul_msg_id);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }
}
