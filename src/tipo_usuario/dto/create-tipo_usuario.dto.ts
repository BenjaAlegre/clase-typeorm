import { IsString } from 'class-validator';

export class CreateTipoUsuarioDto {
  @IsString()
  descripcion: string;
}
