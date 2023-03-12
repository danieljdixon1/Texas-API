import { Injectable } from '@nestjs/common';
import { DeckService } from 'src/deck/deck.service';
import { GameState } from 'src/state/schemas/gamestate.schema';
import { machinePhases } from './interfaces/machine-phases';
import { phaseDealCards } from './machine-phases/phase-deal-cards';
import { phaseFinalBet } from './machine-phases/phase-final-bet';
import { phaseFirstBet } from './machine-phases/phase-first-bet';
import { phaseFlip } from './machine-phases/phase-flip';
import { phaseFlop } from './machine-phases/phase-flop';
import { phaseFold } from './machine-phases/phase-fold';
import { phaseRise } from './machine-phases/phase-rise';
import { phaseRun } from './machine-phases/phase-run';
import { phaseSecondBet } from './machine-phases/phase-second-bet';
import { phaseShuffle } from './machine-phases/phase-shuffle';

@Injectable()
export class MachineService {
    constructor(private readonly deckService: DeckService){}

    phases: machinePhases[] = [
        new phaseShuffle(),

        new phaseDealCards(this.deckService),
        new phaseFirstBet(),
        new phaseSecondBet(),
        new phaseFinalBet(),

        new phaseFlop(this.deckService),
        new phaseFirstBet(),
        new phaseSecondBet(),
        new phaseFinalBet(),

        new phaseRise(this.deckService),
        new phaseFirstBet(),
        new phaseSecondBet(),
        new phaseFinalBet(),

        new phaseRun(this.deckService),
        new phaseFirstBet(),
        new phaseSecondBet(),
        new phaseFinalBet(),

        new phaseFlip(),
        new phaseFold(),
    ]
    
    runUntilNextPlayerPrompt(state: GameState): GameState{
        state.playersTurn=false;
        while (!state.playersTurn){
            state = this.phases[state.machinePosition].runPhase(state);
        }
        return state;
    }
}

