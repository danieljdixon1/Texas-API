import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AiService } from './ai.service';


@Module({
  providers: [AiService],
  imports: [HttpModule],
  exports: [AiService]
})
export class AiModule {}
