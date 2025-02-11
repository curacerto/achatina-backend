import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 256 })
  blueprint: string;

  @Column({ length: 256 })
  icon: string;

  @Column('int')
  price: number;

  @Column('int')
  price_bp: number;
}