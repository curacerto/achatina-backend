import { KitItem } from '../entities/kit-item.entity';

export class KitWithItemsDto {
  id: number;
  name: string;
  price: number;
  items: KitItem[];

  constructor(id: number, name: string, price: number, items: KitItem[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.items = items;
  }
}