import { Injectable } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';

import { UpdateQuizeDto } from './dto/update-quize.dto';

@Injectable()
export class QuizesService {
  constructor(private prisma: PrismaService) {}

  create() {
    return this.prisma.quiz.create({
      data: {
        name: 'name',
      },
    });
  }

  findAll() {
    return this.prisma.quiz.findMany();
  }

  findOne(id: number) {
    return this.prisma.quiz.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateQuizeDto: UpdateQuizeDto) {
    return this.prisma.quiz.update({
      data: {
        ...updateQuizeDto,
        updated_at: new Date(),
      },
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.quiz.delete({
      where: {
        id,
      },
    });
  }
}
