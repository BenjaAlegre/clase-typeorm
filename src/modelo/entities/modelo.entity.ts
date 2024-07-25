import { ApiTags } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('modelo')
@Entity('modelo')
export class Modelo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
