import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('coche')
export class Coche {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  modelo: string;

  @Column('text')
  marca: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
}
