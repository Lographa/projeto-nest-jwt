import { Test, TestingModule } from '@nestjs/testing';
import { NovaRotaService } from './nova-rota.service';

describe('NovaRotaService', () => {
  let service: NovaRotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovaRotaService],
    }).compile();

    service = module.get<NovaRotaService>(NovaRotaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
