import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find({
      relations: { ubicacion: true, coches: true, tipo_usuario: true, lenguaje: true },
    });
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update({ id: id }, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({ id: id });
  }
}
