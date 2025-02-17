import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto, UpdateDinosaurDto } from './dto';

@Controller('dinosaur')
export class DinosaurController {
  constructor(private readonly dinosaurService: DinosaurService) {
  }

  @Post()
  create(@Body() createDinosaurDto: CreateDinosaurDto) {
    return this.dinosaurService.create(createDinosaurDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.dinosaurService.findWithQuery(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinosaurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDinosaurDto: UpdateDinosaurDto) {
    return this.dinosaurService.update(+id, updateDinosaurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinosaurService.remove(+id);
  }
}
