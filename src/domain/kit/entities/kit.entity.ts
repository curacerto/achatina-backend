import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column('int')
  price: number;
}