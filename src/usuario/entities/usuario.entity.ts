import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Lenguaje } from '../../lenguaje/entities/lenguaje.entity';
import { TipoUsuario } from '../../tipo_usuario/entities/tipo_usuario.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';
import { Coche } from '../../coche/entities/coche.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('int', { nullable: true })
  dni: number;

  //   @ManyToOne(() => Role, (role) => role.user)
  //   role: Role;

  // @OneToMany(() => UserCurso, (userCurso) => userCurso.user)
  //   curso: UserCurso[];

  @ManyToOne(() => Ubicacion)
  ubicacion: Ubicacion;

  @OneToMany(() => Coche, (coche) => coche.usuario)
  coches: Coche[];
  @ManyToOne(() => TipoUsuario, (tipo) => tipo.id)
  tipo_usuario: TipoUsuario;

  @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.id)
  lenguaje: Lenguaje;
}
