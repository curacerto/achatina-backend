import { Controller, Get, Param } from '@nestjs/common';
import { KitService } from './kit.service';

@Controller('kit')
export class KitController {
  constructor(
    private readonly kitService: KitService,
  ) {
  }

  @Get('name/:name')
  getKitByName(@Param('name') name: string) {
    return this.kitService.findByName(name);
  }

  @Get(':id')
  getKitById(@Param('id') id: number) {
    return this.kitService.findById(id);
  }
}