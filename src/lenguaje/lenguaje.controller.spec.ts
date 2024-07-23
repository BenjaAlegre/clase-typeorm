import { Test, TestingModule } from '@nestjs/testing';
import { LenguajeController } from './lenguaje.controller';
import { LenguajeService } from './lenguaje.service';

describe('LenguajeController', () => {
  let controller: LenguajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LenguajeController],
      providers: [LenguajeService],
    }).compile();

    controller = module.get<LenguajeController>(LenguajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
