import { Module } from '@nestjs/common';

import { QuestionsModule } from './questions/questions.module';
import { QuizesModule } from './quizes/quizes.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [QuizesModule, SectionsModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
