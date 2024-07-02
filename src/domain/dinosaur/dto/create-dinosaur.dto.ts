import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDinosaurDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
