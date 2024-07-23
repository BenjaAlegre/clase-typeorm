import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocheModule } from './coche/coche.module';
import { typeORM } from './config/typeORM';
import { LenguajeModule } from './lenguaje/lenguaje.module';
import { TipoUsuarioModule } from './tipo_usuario/tipo_usuario.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    UbicacionModule,
    TipoUsuarioModule,
    LenguajeModule,
    UsuarioModule,
    CocheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
