import { PartialType } from '@nestjs/mapped-types';
import { CreateDinosaurDto } from './create-dinosaur.dto';

export class UpdateDinosaurDto extends PartialType(CreateDinosaurDto) {}
