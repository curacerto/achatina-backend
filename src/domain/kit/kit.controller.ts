import { Controller, Get } from '@nestjs/common';
import { KitService } from './kit.service';

@Controller('kit')
export class KitController {
  constructor(
    private readonly kitService: KitService,
  ) {
  }

  @Get('name/:name')
  getKitByName(name: string) {
    return this.kitService.findByName(name);
  }

  @Get(':id')
  getKitById(id: number) {
    return this.kitService.findById(id);
  }
}