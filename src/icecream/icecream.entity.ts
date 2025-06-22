import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IceCream {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flavor: string;

  @Column('decimal')
  price: number;
}
