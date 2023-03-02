import { Module } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';
import { QuizesService } from './quizes.service';

import { QuizesController } from './quizes.controller';

@Module({
  controllers: [QuizesController],
  providers: [QuizesService, PrismaService],
})
export class QuizesModule {}
