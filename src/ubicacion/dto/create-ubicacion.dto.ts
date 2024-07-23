import { IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsString()
  direccion: string;
  @IsString()
  localidad: string;
  @IsString()
  provincia: string;
  @IsString()
  pais: string;
}
