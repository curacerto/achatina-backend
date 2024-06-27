import { PartialType } from '@nestjs/mapped-types';
import { CreateStatRangeDto } from './create-stat-range.dto';

export class UpdateStatRangeDto extends PartialType(CreateStatRangeDto) {}
