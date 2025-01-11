import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 500 })
  icon: string;

  @Column('int')
  quantity: number;

  @Column('int')
  price: number;

  @Column({ length: 256 })
  msg_id: string;

  @Column({ length: 256 })
  resource_id: string;
}
