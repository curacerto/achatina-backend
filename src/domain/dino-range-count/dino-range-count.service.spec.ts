import { Test, TestingModule } from '@nestjs/testing';
import { DinoRangeCountService } from './dino-range-count.service';

describe('DinoRangeCountService', () => {
  let service: DinoRangeCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinoRangeCountService],
    }).compile();

    service = module.get<DinoRangeCountService>(DinoRangeCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
