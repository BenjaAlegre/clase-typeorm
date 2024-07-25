import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Marca } from '../../marca/entities/marca.entity';
import { Modelo } from '../../modelo/entities/modelo.entity';

export class CreateCocheDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  modelo: Modelo;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  marca: Marca;
  @ApiProperty()
  @IsString()
  color: string;
  @ApiProperty()
  @IsString()
  patente: string;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  usuario: Usuario;
}
