import { Test, TestingModule } from '@nestjs/testing';
import { StatRangeService } from './stat-range.service';

describe('StatRangeService', () => {
  let service: StatRangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatRangeService],
    }).compile();

    service = module.get<StatRangeService>(StatRangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
