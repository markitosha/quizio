import { Module } from '@nestjs/common';
import { QuizesService } from './quizes.service';
import { QuizesController } from './quizes.controller';
import { PrismaService } from '../db/prisma.service';

@Module({
  controllers: [QuizesController],
  providers: [QuizesService, PrismaService],
})
export class QuizesModule {}
