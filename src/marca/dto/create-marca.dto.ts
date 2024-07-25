import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMarcaDto {
  @ApiProperty()
  @IsString()
  descripcion: string;
}
