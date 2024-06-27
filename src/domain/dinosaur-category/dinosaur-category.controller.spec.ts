import { Test, TestingModule } from '@nestjs/testing';
import { DinosaurCategoryController } from './dinosaur-category.controller';
import { DinosaurCategoryService } from './dinosaur-category.service';

describe('DinosaurCategoryController', () => {
  let controller: DinosaurCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinosaurCategoryController],
      providers: [DinosaurCategoryService],
    }).compile();

    controller = module.get<DinosaurCategoryController>(DinosaurCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
