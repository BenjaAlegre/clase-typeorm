import { IsString } from 'class-validator';

export class CreateLenguajeDto {
  @IsString()
  descripcion: string;
}
