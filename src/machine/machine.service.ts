import { Injectable } from '@nestjs/common';
import { DeckService } from 'src/deck/deck.service';
import { GameState } from 'src/state/schemas/gamestate.schema';
import { machinePhases } from './interfaces/machine-phases';
import { phaseDealCards } from './machine-phases/phase-deal-cards';
import { phaseFlop } from './machine-phases/phase-flop';
import { phaseRise } from './machine-phases/phase-rise';
import { phaseRun } from './machine-phases/phase-run';
import { phaseShuffle } from './machine-phases/phase-shuffle';

@Injectable()
export class MachineService {
    constructor(private readonly deckService: DeckService){}

    phases: machinePhases[] = [
        new phaseDealCards(this.deckService),
        new phaseFlop(this.deckService),
        new phaseRise(this.deckService),
        new phaseRun(this.deckService),
        new phaseShuffle(),
    ]
    
    runUntilNextPlayerPrompt(startingState: GameState): GameState{
        const current = startingState;
        while (!this.phases[current.machinePosition].runPhase(current));
        return current;
    }
}

