import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AiService } from './ai/ai.service';

@Injectable()
export class AppService {
  constructor (private readonly aiService: AiService){}

}
