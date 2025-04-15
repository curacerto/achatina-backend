import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  player_id: number;

  @IsNumber()
  resource_id: number;

  @IsNumber()
  kit_id: number;

  @IsNumber()
  dinosaur_id: number;

  @IsNumber()
  saddle_id: number;

  @IsNumber()
  item_id: number;

  is_blueprint: boolean;

  @IsNotEmpty()
  @IsString()
  msg_id: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsString()
  map: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  created_at: string;
}
