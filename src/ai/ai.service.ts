import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { AIDecision } from 'src/ai/dto/res-ai-decision';
import { ReqOpponentViewData } from 'src/ai/dto/req-opponent-view-data';

@Injectable()
export class AiService {
    private url: string = "";

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ){
        this.url = this.configService.get<string>("AI_URL");
    }

    async getAIAction(reqData: ReqOpponentViewData): Promise<AIDecision> {
        const aiResponse: AxiosResponse = await firstValueFrom(this.httpService.post(this.url, reqData));
        return (aiResponse.data as AIDecision);
    }
}
