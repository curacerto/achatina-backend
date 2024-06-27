import { Test, TestingModule } from '@nestjs/testing';
import { StatCountService } from './stat-count.service';

describe('StatCountService', () => {
  let service: StatCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatCountService],
    }).compile();

    service = module.get<StatCountService>(StatCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
