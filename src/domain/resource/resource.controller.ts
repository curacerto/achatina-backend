import { Controller, Get } from '@nestjs/common';
import { ResourceService } from './resource.service';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {
  }

  @Get()
  findAll() {
    return this.resourceService.findAll();
  }
}
