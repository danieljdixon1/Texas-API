import { Module } from '@nestjs/common';
import { DeckModule } from 'src/deck/deck.module';
import { MachineModule } from 'src/machine/machine.module';
import { GamePlayPhaseService } from './game.service';

@Module({
  providers: [GamePlayPhaseService],
  exports: [GamePlayPhaseService],
  imports: [MachineModule, DeckModule],
})
export class GamePlayPhaseModule {}
