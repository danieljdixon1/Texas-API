import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { reqBet } from './model/req-bet';
import { ResPlayerViewData } from './model/res-player-view-data';
import { ViewGeneratorService } from './view-generator/view-generator.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly viewGeneratorService: ViewGeneratorService
  ) {}

  @Get("state")
  async state(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.state());
  }
  @Post("deal")
  async deal(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.deal());
  }
  @Post("fold")
  async fold(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.fold());
  }
  @Post("call")
  async call(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.call());
  }
  @Post("bet")
  async bet(@Res() res, @Body() req: reqBet): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.bet(req.amount));
  }
  @Post("restart")
  async restart(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(await this.appService.restart());
  }
}
