import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatCountService } from './stat-count.service';
import { CreateStatCountDto } from './dto/create-stat-count.dto';
import { UpdateStatCountDto } from './dto/update-stat-count.dto';

@Controller('stat-count')
export class StatCountController {
  constructor(private readonly statCountService: StatCountService) {}

  @Post()
  create(@Body() createStatCountDto: CreateStatCountDto) {
    return this.statCountService.create(createStatCountDto);
  }

  @Get()
  findAll() {
    return this.statCountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statCountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatCountDto: UpdateStatCountDto) {
    return this.statCountService.update(+id, updateStatCountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statCountService.remove(+id);
  }
}
