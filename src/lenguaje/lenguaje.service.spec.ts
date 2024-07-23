import { Test, TestingModule } from '@nestjs/testing';
import { LenguajeService } from './lenguaje.service';

describe('LenguajeService', () => {
  let service: LenguajeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LenguajeService],
    }).compile();

    service = module.get<LenguajeService>(LenguajeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
