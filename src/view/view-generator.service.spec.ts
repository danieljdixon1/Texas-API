import { Test, TestingModule } from '@nestjs/testing';
import { ViewGeneratorService } from './view-generator.service';

describe('ViewGeneratorService', () => {
  let service: ViewGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewGeneratorService],
    }).compile();

    service = module.get<ViewGeneratorService>(ViewGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
