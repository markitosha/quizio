import { Injectable } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';

import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) {}

  create(quizId: number, createSectionDto: CreateSectionDto) {
    return this.prisma.section.create({
      data: {
        quizId,
        ...createSectionDto,
      },
    });
  }

  findAll(quizId: number) {
    return this.prisma.section.findMany({
      where: {
        quizId,
      },
      orderBy: {
        index: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.section.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return this.prisma.section.update({
      data: updateSectionDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.section.delete({
      where: {
        id,
      },
    });
  }
}
