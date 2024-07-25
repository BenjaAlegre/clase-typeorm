import { Injectable } from '@nestjs/common';
import { CreateTipoUsuarioDto } from './dto/create-tipo_usuario.dto';
import { UpdateTipoUsuarioDto } from './dto/update-tipo_usuario.dto';
import { TipoUsuario } from './entities/tipo_usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoUsuarioService {
  constructor(
    @InjectRepository(TipoUsuario)
    private readonly tipoUsuarioRepository: Repository<TipoUsuario>,
  ) {}

  create(createTipoUsuarioDto: CreateTipoUsuarioDto) {
    return this.tipoUsuarioRepository.save(createTipoUsuarioDto);
  }

  findAll() {
    return this.tipoUsuarioRepository.find();
  }

  findOne(id: number) {
    return this.tipoUsuarioRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateTipoUsuarioDto: UpdateTipoUsuarioDto) {
    return this.tipoUsuarioRepository.update({ id: id }, updateTipoUsuarioDto);
  }

  remove(id: number) {
    return this.tipoUsuarioRepository.softDelete({ id: id });
  }
}
