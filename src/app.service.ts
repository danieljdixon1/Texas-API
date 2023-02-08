import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AiService } from './ai/ai.service';
import { DealCardRes } from './DTO/deal-card-res';

@Injectable()
export class AppService {
  constructor (private readonly aiService: AiService){}

  async dealcard(): Promise<DealCardRes> {
    const aiAction: string = await this.aiService.getAIAction()
    return { cardText: aiAction } as DealCardRes;
  }

}
