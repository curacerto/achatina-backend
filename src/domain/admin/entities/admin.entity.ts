import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  admin_msg_id: string;

  @Column({ length: 256 })
  soul_msg_id: string;

  @Column({ length: 256 })
  admin_id: string;
}