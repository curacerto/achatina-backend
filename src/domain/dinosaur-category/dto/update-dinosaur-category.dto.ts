import { PartialType } from '@nestjs/mapped-types';
import { CreateDinosaurCategoryDto } from './create-dinosaur-category.dto';

export class UpdateDinosaurCategoryDto extends PartialType(CreateDinosaurCategoryDto) {}
