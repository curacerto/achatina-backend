import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128, name: 'ark_id' })
  arkId: string;

  @Column({ length: 128, name: 'discord_id' })
  discordId: string;

  @Column()
  balance: number;
}