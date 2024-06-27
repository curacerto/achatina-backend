import { Test, TestingModule } from '@nestjs/testing';
import { DinoRangeCountController } from './dino-range-count.controller';
import { DinoRangeCountService } from './dino-range-count.service';

describe('DinoRangeCountController', () => {
  let controller: DinoRangeCountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinoRangeCountController],
      providers: [DinoRangeCountService],
    }).compile();

    controller = module.get<DinoRangeCountController>(DinoRangeCountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
