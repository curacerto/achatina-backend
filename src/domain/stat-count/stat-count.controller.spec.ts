import { Test, TestingModule } from '@nestjs/testing';
import { StatCountController } from './stat-count.controller';
import { StatCountService } from './stat-count.service';

describe('StatCountController', () => {
  let controller: StatCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatCountController],
      providers: [StatCountService],
    }).compile();

    controller = module.get<StatCountController>(StatCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
