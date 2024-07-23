import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lenguaje')
export class Lenguaje {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;
}
