import { ApiTags } from '@nestjs/swagger';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ApiTags('marca')
@Entity('marca')
export class Marca {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  descripcion: string;

  @DeleteDateColumn()
  timeDeleted: Date;
  @CreateDateColumn()
  timeCreated: Date;
}
