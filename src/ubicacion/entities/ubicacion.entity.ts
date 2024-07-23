import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column('text')
  pais: string;
  @OneToMany(() => Usuario, (usuario) => usuario.ubicacion)
  usuarios: Usuario[];
}
