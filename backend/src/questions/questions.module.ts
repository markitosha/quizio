import { Module } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';
import { QuestionsService } from './questions.service';

import { QuestionsController } from './questions.controller';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, PrismaService],
})
export class QuestionsModule {}
