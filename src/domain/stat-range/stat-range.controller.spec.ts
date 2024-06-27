import { Test, TestingModule } from '@nestjs/testing';
import { StatRangeController } from './stat-range.controller';
import { StatRangeService } from './stat-range.service';

describe('StatRangeController', () => {
  let controller: StatRangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatRangeController],
      providers: [StatRangeService],
    }).compile();

    controller = module.get<StatRangeController>(StatRangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
