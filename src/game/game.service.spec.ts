import { Test, TestingModule } from '@nestjs/testing';
import { GamePlayPhaseService } from './game.service';

describe('GamePlayPhaseService', () => {
  let service: GamePlayPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamePlayPhaseService],
    }).compile();

    service = module.get<GamePlayPhaseService>(GamePlayPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
