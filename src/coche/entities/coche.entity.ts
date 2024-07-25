import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Marca } from '../../marca/entities/marca.entity';
import { Modelo } from '../../modelo/entities/modelo.entity';

@Entity('coche')
export class Coche {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Modelo, (modelo) => modelo.id)
  modelo: Modelo;

  @ManyToOne(() => Marca, (marca) => marca.id)
  marca: Marca;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @ManyToOne(() => Usuario)
  usuario: Usuario;
  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
