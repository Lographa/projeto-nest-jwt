import { Test, TestingModule } from '@nestjs/testing';
import { NovaRotaController } from './nova-rota.controller';

describe('NovaRotaController', () => {
  let controller: NovaRotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NovaRotaController],
    }).compile();

    controller = module.get<NovaRotaController>(NovaRotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
