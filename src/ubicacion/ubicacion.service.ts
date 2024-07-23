import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';
import { Ubicacion } from './entities/ubicacion.entity';

@Injectable()
export class UbicacionService {
  constructor(
    @InjectRepository(Ubicacion)
    private readonly ubicacionRepository: Repository<Ubicacion>,
  ) {}

  create(createCocheDto: CreateUbicacionDto) {
    return this.ubicacionRepository.save(createCocheDto);
  }

  findAll() {
    return this.ubicacionRepository.find();
  }

  findOne(id: number) {
    return this.ubicacionRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateCocheDto: UpdateUbicacionDto) {
    return this.ubicacionRepository.update({ id: id }, updateCocheDto);
  }

  remove(id: number) {
    return this.ubicacionRepository.delete({ id: id });
  }
}
