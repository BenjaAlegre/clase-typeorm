import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Lenguaje } from '../../lenguaje/entities/lenguaje.entity';
import { TipoUsuario } from '../../tipo_usuario/entities/tipo_usuario.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsString()
  nombre: string;
  @ApiProperty()
  @IsString()
  apellido: string;
  @ApiProperty()
  @IsNumber()
  dni: number;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  ubicacion: Ubicacion;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  tipo_usuario: TipoUsuario;
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  lenguaje: Lenguaje;
}
