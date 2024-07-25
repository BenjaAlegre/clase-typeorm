import { Injectable } from '@nestjs/common';
import { CreateCocheDto } from './dto/create-coche.dto';
import { UpdateCocheDto } from './dto/update-coche.dto';
import { Coche } from './entities/coche.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CocheService {
  constructor(
    @InjectRepository(Coche)
    private readonly cocheRepository: Repository<Coche>,
  ) {}

  create(createCocheDto: CreateCocheDto) {
    return this.cocheRepository.save(createCocheDto);
  }

  findAll() {
    return this.cocheRepository.find();
  }

  findOne(id: number) {
    return this.cocheRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateCocheDto: UpdateCocheDto) {
    return this.cocheRepository.update({ id: id }, updateCocheDto);
  }

  remove(id: number) {
    return this.cocheRepository.softDelete({ id: id });
  }
}
