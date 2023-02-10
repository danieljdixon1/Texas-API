import { Module } from '@nestjs/common';
import { ViewGeneratorService } from './view-generator.service';

@Module({
  providers: [ViewGeneratorService],
  exports: [ViewGeneratorService]
})
export class ViewGeneratorModule {}
