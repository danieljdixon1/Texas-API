import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GameStateModule } from './gamestate/gamestate.module';

@Module({
  imports: [
    AiModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/gamestate'),
    GameStateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
