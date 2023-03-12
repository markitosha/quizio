import { Module } from '@nestjs/common';

import { QuizesModule } from './quizes/quizes.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [QuizesModule, SectionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
