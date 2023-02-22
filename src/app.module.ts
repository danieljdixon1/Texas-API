import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStateModule } from './state/gamestate.module';
import { GamePlayPhaseModule } from './game/game.module';
import { ViewGeneratorModule } from './view/view-generator.module';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [
    AiModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    //'mongodb://localhost:27017/gamestate'
    //'mongodb://let-me-cook.eastus2.cloudapp.azure.com/20.75.96.69:27017/gamestate'
    //'mongodb://20.75.96.69:27017/gamestate'
    MongooseModule.forRoot('mongodb://20.22.156.5:27017/gamestate?directConnection=true', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: 'majority' },
      readConcern: { level: 'majority' },
      connectTimeoutMS: 30000,
    }),
    GameStateModule,
    GamePlayPhaseModule,
    ViewGeneratorModule,
    DeckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}