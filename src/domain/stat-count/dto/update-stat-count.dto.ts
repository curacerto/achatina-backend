import { PartialType } from '@nestjs/mapped-types';
import { CreateStatCountDto } from './create-stat-count.dto';

export class UpdateStatCountDto extends PartialType(CreateStatCountDto) {}
