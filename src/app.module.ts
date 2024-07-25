import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CocheModule } from './coche/coche.module';
import { typeORM } from './config/typeORM';
import { CountryModule } from './country/country.module';
import { LenguajeModule } from './lenguaje/lenguaje.module';

import { TipoUsuarioModule } from './tipo_usuario/tipo_usuario.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    UbicacionModule,
    TipoUsuarioModule,
    LenguajeModule,
    UsuarioModule,
    CocheModule,
    CountryModule,
    MarcaModule,
    ModeloModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
