import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
