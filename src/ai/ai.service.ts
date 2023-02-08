import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { AIActionRes } from 'src/DTO/ai-action-res';

@Injectable()
export class AiService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
        ){}

    async getAIAction(): Promise<string> {
        const url = this.configService.get<string>("AI_URL");
        const resp = await firstValueFrom(this.httpService.get(url));
        return ({ai_message: resp.data} as AIActionRes).ai_message;
    }
}
