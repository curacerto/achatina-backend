import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { Resource } from './entities/resource.entity';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @Get('resource-id/:resourceId')
  findOneByResourceId(@Param('resourceId') resourceId: string) {
    return this.resourceService.findByResourceId(resourceId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resourceService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<Resource>) {
    return this.resourceService.update(id, updateData);
  }
}
