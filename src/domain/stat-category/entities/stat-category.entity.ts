import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatCategory {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  multiplier: number;

}