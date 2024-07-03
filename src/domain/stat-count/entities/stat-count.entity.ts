import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatCount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stat_count: number;
}
