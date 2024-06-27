import { Test, TestingModule } from '@nestjs/testing';
import { DinosaurCategoryService } from './dinosaur-category.service';

describe('DinosaurCategoryService', () => {
  let service: DinosaurCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinosaurCategoryService],
    }).compile();

    service = module.get<DinosaurCategoryService>(DinosaurCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
