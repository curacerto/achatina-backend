import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KitItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 256 })
  blueprint: string;

  @Column('int')
  quantity: number;

  @Column('int')
  kit_id: number;
}