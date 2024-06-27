import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatRangeService } from './stat-range.service';
import { CreateStatRangeDto } from './dto/create-stat-range.dto';
import { UpdateStatRangeDto } from './dto/update-stat-range.dto';

@Controller('stat-range')
export class StatRangeController {
  constructor(private readonly statRangeService: StatRangeService) {}

  @Post()
  create(@Body() createStatRangeDto: CreateStatRangeDto) {
    return this.statRangeService.create(createStatRangeDto);
  }

  @Get()
  findAll() {
    return this.statRangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statRangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatRangeDto: UpdateStatRangeDto) {
    return this.statRangeService.update(+id, updateStatRangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statRangeService.remove(+id);
  }
}
