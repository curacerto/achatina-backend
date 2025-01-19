import { Body, Controller, Get, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Patch()
  create(@Body() msg_id: string) {
    return this.adminService.updateMsgId(msg_id);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }
}
