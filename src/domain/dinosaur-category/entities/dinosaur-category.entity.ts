import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DinosaurCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'dinosaur_id' })
  dinosaurId: number;

  @Column({ name: 'category_id' })
  categoryId: number;
}
