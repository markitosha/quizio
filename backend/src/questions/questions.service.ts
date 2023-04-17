import { Injectable } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';

import { CreateQuestionDto } from './dto/create-question.dto';
import {
  UpdateQuestionDto,
  UpdateQuestionsDto,
} from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async create(
    quizId: string,
    sectionId: string,
    createQuestionDto: CreateQuestionDto,
  ) {
    const maxIndex = (await this.findAll(sectionId)).reduce((acc, item) => {
      return acc > item.index ? acc : item.index;
    }, -1);

    return this.prisma.question.create({
      data: {
        quizId: Number(quizId),
        sectionId: Number(sectionId),
        type: 'one_answer',
        answer: 0,
        question: 'question',
        index: maxIndex + 1,
        ...createQuestionDto,
      },
    });
  }

  findAll(sectionId: string) {
    return this.prisma.question.findMany({
      where: {
        sectionId: Number(sectionId),
      },
      orderBy: {
        index: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.question.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSectionDto: UpdateQuestionDto) {
    return this.prisma.question.update({
      data: updateSectionDto,
      where: {
        id,
      },
    });
  }

  updateIndexes(updateSectionDto: UpdateQuestionsDto) {
    const promises = updateSectionDto.data.map((value) =>
      this.update(value.id, { index: value.index }),
    );

    return Promise.all(promises);
  }

  remove(id: number) {
    return this.prisma.question.delete({
      where: {
        id,
      },
    });
  }
}
