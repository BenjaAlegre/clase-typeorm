import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateModeloDto {
  @ApiProperty()
  @IsString()
  descripcion: string;
}
