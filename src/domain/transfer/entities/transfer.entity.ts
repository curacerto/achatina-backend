import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  source_id: number;

  @Column()
  target_id: number;

  @Column({ type: 'float', default: 0 })
  amount: number;

  @Column({ type: 'varchar', length: 100 })
  transfer_type: string;

  @Column()
  order_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
