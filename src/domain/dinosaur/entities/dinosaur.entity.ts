import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dinosaur {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  stat_category_id: number;

  @Column({ length: 256 })
  icon: string;

  @Column({ length: 256 })
  blueprint: string;

  @Column({ length: 256 })
  saddle: string;

}