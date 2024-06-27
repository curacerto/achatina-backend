import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DinosaurCategoryService } from './dinosaur-category.service';
import { CreateDinosaurCategoryDto } from './dto/create-dinosaur-category.dto';
import { UpdateDinosaurCategoryDto } from './dto/update-dinosaur-category.dto';

@Controller('dinosaur-category')
export class DinosaurCategoryController {
  constructor(private readonly dinosaurCategoryService: DinosaurCategoryService) {}

  @Post()
  create(@Body() createDinosaurCategoryDto: CreateDinosaurCategoryDto) {
    return this.dinosaurCategoryService.create(createDinosaurCategoryDto);
  }

  @Get()
  findAll() {
    return this.dinosaurCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinosaurCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDinosaurCategoryDto: UpdateDinosaurCategoryDto) {
    return this.dinosaurCategoryService.update(+id, updateDinosaurCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinosaurCategoryService.remove(+id);
  }
}
