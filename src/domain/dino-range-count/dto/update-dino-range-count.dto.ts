import { PartialType } from '@nestjs/mapped-types';
import { CreateDinoRangeCountDto } from './create-dino-range-count.dto';

export class UpdateDinoRangeCountDto extends PartialType(CreateDinoRangeCountDto) {}
