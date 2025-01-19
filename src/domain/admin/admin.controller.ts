import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Patch(':id')
  create(@Param('id') id: string, @Body() msg_id: string) {
    return this.adminService.updateMsgId(Number.parseInt(id), msg_id);
  }

  @Get()
  findAll() {
    return this.adminService.findAll();
  }
}
