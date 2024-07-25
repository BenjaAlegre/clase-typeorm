import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from '../../country/entities/country.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('ubicacion')
export class Ubicacion {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  direccion: string;

  @Column('text')
  localidad: string;

  @Column('text')
  provincia: string;

  @ManyToOne(() => Country, (country) => country.id)
  pais: Country;
  @OneToMany(() => Usuario, (usuario) => usuario.ubicacion)
  usuarios: Usuario[];

  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
