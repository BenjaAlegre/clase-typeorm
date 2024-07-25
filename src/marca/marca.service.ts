import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}

  create(createMarcaDto: CreateMarcaDto) {
    return this.marcaRepository.save(createMarcaDto);
  }

  findAll() {
    return this.marcaRepository.find();
  }

  findOne(id: number) {
    return this.marcaRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return this.marcaRepository.update({ id: id }, updateMarcaDto);
  }

  remove(id: number) {
    return this.marcaRepository.softDelete({ id: id });
  }
}
