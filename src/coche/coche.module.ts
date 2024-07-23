import { Module } from '@nestjs/common';
import { CocheService } from './coche.service';
import { CocheController } from './coche.controller';
import { Coche } from './entities/coche.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Coche])],
  controllers: [CocheController],
  providers: [CocheService],
})
export class CocheModule {}
