import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DinosaurService } from './dinosaur.service';
import { CreateDinosaurDto } from './dto/create-dinosaur.dto';
import { UpdateDinosaurDto } from './dto/update-dinosaur.dto';

@Controller('dinosaur')
export class DinosaurController {
  constructor(private readonly dinosaurService: DinosaurService) {
  }

  @Post()
  create(@Body() createDinosaurDto: CreateDinosaurDto) {
    return this.dinosaurService.create(createDinosaurDto);
  }

  @Get()
  findAll() {
    return this.dinosaurService.findAll();
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
