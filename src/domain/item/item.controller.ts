import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
  ) {
  }

  @Get('name/:name')
  getKitByName(@Param('name') name: string) {
    return this.itemService.findByName(name);
  }

  @Get(':id')
  getKitById(@Param('id') id: number) {
    return this.itemService.findById(id);
  }

  @Get()
  getAllItems() {
    return this.itemService.findAll();
  }

  @Get('query')
  getItemsByQueryParams(@Query() queryParams: any) {
    return this.itemService.findByQueryParams(queryParams);
  }
}