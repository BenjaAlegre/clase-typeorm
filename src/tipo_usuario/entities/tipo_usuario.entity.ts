import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_usuario')
export class TipoUsuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;
}
