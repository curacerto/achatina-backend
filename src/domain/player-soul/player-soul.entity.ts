import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlayerSoul {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    player_id: number;

    @Column('int')
    soul: number;

    @Column('int')
    terminal: number;
}