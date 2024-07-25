import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from './entities/modelo.entity';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modeloRepository: Repository<Modelo>,
  ) {}

  create(createModeloDto: CreateModeloDto) {
    return this.modeloRepository.save(createModeloDto);
  }

  findAll() {
    return this.modeloRepository.find();
  }

  findOne(id: number) {
    return this.modeloRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return this.modeloRepository.update({ id: id }, updateModeloDto);
  }

  remove(id: number) {
    return this.modeloRepository.softDelete({ id: id });
  }
}
