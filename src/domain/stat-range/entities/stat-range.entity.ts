import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StatRange {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  minimum: number;

  @Column()
  maximum: number;
}
