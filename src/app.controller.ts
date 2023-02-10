import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ResPlayerViewData } from './model/res-player-view-data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,) {}

  @Get("state")
  async state(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.state());
  }
  @Get("deal")
  async deal(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.deal());
  }
  @Get("fold")
  async fold(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.fold());
  }
  @Get("call")
  async call(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.call());
  }
  @Post("bet")
  async bet(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.bet());
  }

  @Post("restart")
  async restart(@Res() res): Promise<ResPlayerViewData> {
    return res.status(HttpStatus.OK).json(this.appService.restart());
  }
}
