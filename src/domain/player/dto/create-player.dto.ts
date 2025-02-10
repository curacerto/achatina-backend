import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  arkId: string;

  @IsNotEmpty()
  @IsString()
  discordId: string;

  @IsNumber()
  balance: number;
}