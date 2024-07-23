import { Module } from '@nestjs/common';
import { LenguajeService } from './lenguaje.service';
import { LenguajeController } from './lenguaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lenguaje } from './entities/lenguaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],
  controllers: [LenguajeController],
  providers: [LenguajeService],
})
export class LenguajeModule {}
