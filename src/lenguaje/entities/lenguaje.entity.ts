import { ApiTags } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('Lenguaje')
@Entity('lenguaje')
export class Lenguaje {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
