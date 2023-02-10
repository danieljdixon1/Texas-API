import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStateModule } from './gamestate/gamestate.module';
import { GamePlayPhaseModule } from './game-play-phase/game-play-phase.module';
import { ViewGeneratorModule } from './view-generator/view-generator.module';

@Module({
  imports: [
    AiModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/gamestate'),
    GameStateModule,
    GamePlayPhaseModule,
    ViewGeneratorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
