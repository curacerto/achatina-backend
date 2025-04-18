import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  player_id: number;

  @Column('int')
  resource_id: number;

  @Column('int')
  kit_id: number;

  @Column('int')
  dinosaur_id: number;

  @Column('int')
  saddle_id: number;

  @Column('int')
  item_id: number;

  @Column()
  is_blueprint: boolean;

  @Column({ length: 256 })
  msg_id: string;

  @Column('int')
  amount: number;

  @Column('int')
  price: number;

  @Column('int')
  total: number;

  @Column({ length: 100 })
  map: string;

  @Column({ length: 100 })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
