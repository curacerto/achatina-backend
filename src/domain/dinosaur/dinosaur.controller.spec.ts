import { Test, TestingModule } from '@nestjs/testing';
import { DinosaurController } from './dinosaur.controller';
import { DinosaurService } from './dinosaur.service';

describe('DinosaurController', () => {
  let controller: DinosaurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinosaurController],
      providers: [DinosaurService],
    }).compile();

    controller = module.get<DinosaurController>(DinosaurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
