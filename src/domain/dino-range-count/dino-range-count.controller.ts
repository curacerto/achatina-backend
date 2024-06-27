import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DinoRangeCountService } from './dino-range-count.service';
import { CreateDinoRangeCountDto } from './dto/create-dino-range-count.dto';
import { UpdateDinoRangeCountDto } from './dto/update-dino-range-count.dto';

@Controller('dino-range-count')
export class DinoRangeCountController {
  constructor(private readonly dinoRangeCountService: DinoRangeCountService) {}

  @Post()
  create(@Body() createDinoRangeCountDto: CreateDinoRangeCountDto) {
    return this.dinoRangeCountService.create(createDinoRangeCountDto);
  }

  @Get()
  findAll() {
    return this.dinoRangeCountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinoRangeCountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDinoRangeCountDto: UpdateDinoRangeCountDto) {
    return this.dinoRangeCountService.update(+id, updateDinoRangeCountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinoRangeCountService.remove(+id);
  }
}
