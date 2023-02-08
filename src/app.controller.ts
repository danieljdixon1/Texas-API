import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { DealCardRes } from './DTO/deal-card-res';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("dealcard")
  async dealcard(@Res() res): Promise<string> {
    console.log("player clicked button");
    // const result = await this.appService.dealcard();
    const result = { cardText: "A1" } as DealCardRes;
    return res.status(HttpStatus.OK).json(result);
  }
}
