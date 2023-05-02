import { Module } from '@nestjs/common';

import { PlayersModule } from './players/players.module';
import { QuestionsModule } from './questions/questions.module';
import { QuizesModule } from './quizes/quizes.module';
import { RunsModule } from './runs/runs.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    QuizesModule,
    SectionsModule,
    QuestionsModule,
    RunsModule,
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
