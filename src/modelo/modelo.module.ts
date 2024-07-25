import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modelo } from './entities/modelo.entity';
import { ModeloController } from './modelo.controller';
import { ModeloService } from './modelo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo])],
  controllers: [ModeloController],
  providers: [ModeloService],
})
export class ModeloModule {}
