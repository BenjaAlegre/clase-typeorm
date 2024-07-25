import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Country } from '../../country/entities/country.entity';

export class CreateUbicacionDto {
  @ApiProperty()
  @IsString()
  direccion: string;
  @ApiProperty()
  @IsString()
  localidad: string;
  @ApiProperty()
  @IsString()
  provincia: string;
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  pais: Country;
}
