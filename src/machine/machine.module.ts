import { Module } from '@nestjs/common';
import { DeckModule } from 'src/deck/deck.module';
import { DeckService } from 'src/deck/deck.service';
import { MachineService } from './machine.service';

@Module({
    providers: [MachineService],
    exports: [MachineService],
    imports: [DeckModule],
})
export class MachineModule {}
