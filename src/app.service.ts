import { Injectable } from '@nestjs/common';
import { GamePlayPhaseService } from './game-play-phase/game-play-phase.service';
import { GameStateService } from './gamestate/gameState.service';
import { ResPlayerViewData } from './model/res-player-view-data';
import { ViewGeneratorService } from './view-generator/view-generator.service';

@Injectable()
export class AppService {
  constructor(
    private readonly gameStateService: GameStateService,
    private readonly gameplayPhaseService: GamePlayPhaseService,
    private readonly viewGeneratorService: ViewGeneratorService,
    ) {}

    async state(): Promise<ResPlayerViewData> {
      const result = await this.gameStateService.getOnlyGameState();
      return this.viewGeneratorService.getPlayerView(result);   //get state
    }
    async deal(): Promise<ResPlayerViewData> {
      const oldState = await this.gameStateService.getOnlyGameState();    //get state
      const newState = this.gameplayPhaseService.deal(oldState);          //update state
      await this.gameStateService.setOnlyGameState(newState);             //save state
      return this.viewGeneratorService.getPlayerView(newState);           //return view of state
    }
    async fold(): Promise<ResPlayerViewData> {
      const oldState = await this.gameStateService.getOnlyGameState() 
      const newState = this.gameplayPhaseService.fold(oldState);      
      await this.gameStateService.setOnlyGameState(newState);         
      return this.viewGeneratorService.getPlayerView(newState);       
    }
    async call(): Promise<ResPlayerViewData> {
      const oldState = await this.gameStateService.getOnlyGameState()
      const newState = this.gameplayPhaseService.call(oldState);
      await this.gameStateService.setOnlyGameState(newState);
      return this.viewGeneratorService.getPlayerView(newState);
    }
    async bet(amount: number): Promise<ResPlayerViewData> {
      const oldState = await this.gameStateService.getOnlyGameState()
      const newState = this.gameplayPhaseService.bet(oldState, amount);
      await this.gameStateService.setOnlyGameState(newState);
      return this.viewGeneratorService.getPlayerView(newState);
    }
    async restart(): Promise<ResPlayerViewData> {
      const newState = await this.gameStateService.restart();
      return this.viewGeneratorService.getPlayerView(newState);
    }
}
