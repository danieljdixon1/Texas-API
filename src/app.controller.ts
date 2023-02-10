import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { GameStateService } from './gamestate/gameState.service';
import { ResGameState } from './DTO/res-game-state';
import { GameState } from './gamestate/schemas/gamestate.schema';
import { CreateGameStateDto } from './gamestate/dto/create-gamestate.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly gameStateService: GameStateService,
    ) {}
  @Get("state")
  async state(@Res() res): Promise<GameState[]> {
    const createResult = await this.gameStateService.create({ } as CreateGameStateDto);
    console.log(createResult);
    const readResult = await this.gameStateService.findAll()
    console.log(readResult);
    return res.status(HttpStatus.OK).json(readResult);
  }
  
  @Get("deal")
  async deal(@Res() res): Promise<ResGameState> {
    return Promise.resolve<ResGameState>({} as ResGameState);
  }

  @Get("fold")
  async fold(@Res() res): Promise<ResGameState> {
    return Promise.resolve<ResGameState>({} as ResGameState);
  }

  @Get("call")
  async call(@Res() res): Promise<ResGameState> {
    return Promise.resolve<ResGameState>({} as ResGameState);
  }

  @Get("bet")
  async bet(@Res() res): Promise<ResGameState> {
    return Promise.resolve<ResGameState>({} as ResGameState);
  }
}
