import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTipoUsuarioDto {
  @ApiProperty()
  @IsString()
  descripcion: string;
}
