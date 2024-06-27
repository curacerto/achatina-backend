import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {
  }

  @Post()
  create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  update(@Param() id: string, @Body() categoryDto: CategoryDto) {
    return this.categoryService.update(id, categoryDto);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    return this.categoryService.remove(id);
  }

}
