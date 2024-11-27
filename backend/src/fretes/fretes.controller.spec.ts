import { Test, TestingModule } from '@nestjs/testing';
import { FretesController } from './fretes.controller';
import { FretesService } from './fretes.service';

describe('FretesController', () => {
  let controller: FretesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FretesController],
      providers: [FretesService],
    }).compile();

    controller = module.get<FretesController>(FretesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
