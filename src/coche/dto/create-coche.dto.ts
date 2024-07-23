import { IsNumber, IsString } from 'class-validator';
import { Usuario } from '../../usuario/entities/usuario.entity';

export class CreateCocheDto {
  @IsString()
  modelo: string;

  @IsString()
  marca: string;

  @IsString()
  color: string;

  @IsString()
  patente: string;

  @IsNumber()
  usuario: Usuario;
}
