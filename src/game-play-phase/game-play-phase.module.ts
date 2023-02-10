import { Module } from '@nestjs/common';
import { GamePlayPhaseService } from './game-play-phase.service';

@Module({
  providers: [GamePlayPhaseService],
  exports: [GamePlayPhaseService]
})
export class GamePlayPhaseModule {}
