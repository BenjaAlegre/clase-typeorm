import { IsNumber, IsString } from 'class-validator';
import { Lenguaje } from '../../lenguaje/entities/lenguaje.entity';
import { TipoUsuario } from '../../tipo_usuario/entities/tipo_usuario.entity';
import { Ubicacion } from '../../ubicacion/entities/ubicacion.entity';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;
  @IsString()
  apellido: string;
  @IsNumber()
  dni: number;
  @IsNumber()
  ubicacion: Ubicacion;
  @IsNumber()
  tipo_usuario: TipoUsuario;
  @IsNumber()
  lenguaje: Lenguaje;
}
