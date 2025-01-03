import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dinosaur {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  stat_category_id: number;

}