import { Injectable } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';

import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';

@Injectable()
export class RunsService {
  constructor(private prisma: PrismaService) {}

  create(createRunDto: CreateRunDto, quizId: number) {
    return this.prisma.run.create({
      data: {
        name: 'Run',
        quizId,
      },
    });
  }

  findAll(quizId: number) {
    return this.prisma.run.findMany({
      where: {
        quizId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.run.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateRunDto: UpdateRunDto) {
    return `This action updates a #${id} run`;
  }

  remove(id: number) {
    return `This action removes a #${id} run`;
  }
}
