import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';

@Injectable()
export class LenguajeService {
  constructor(
    @InjectRepository(Lenguaje)
    private readonly lenguajeRepository: Repository<Lenguaje>,
  ) {}

  create(createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajeRepository.save(createLenguajeDto);
  }

  findAll() {
    return this.lenguajeRepository.find();
  }

  findOne(id: number) {
    return this.lenguajeRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, createLenguajeDto: UpdateLenguajeDto) {
    return this.lenguajeRepository.update({ id: id }, createLenguajeDto);
  }

  remove(id: number) {
    return this.lenguajeRepository.softDelete({ id: id });
  }
}
