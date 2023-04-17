import { Injectable } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';

import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { UpdateSectionsDto } from './dto/update-sections.dto';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) {}

  async create(quizId: number, createSectionDto: CreateSectionDto) {
    const maxIndex = (await this.findAll(quizId)).reduce((acc, item) => {
      return acc > item.index ? acc : item.index;
    }, -1);

    return this.prisma.section.create({
      data: {
        quizId,
        name: 'section',
        index: maxIndex + 1,
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

  updateIndexes(updateSectionDto: UpdateSectionsDto) {
    const promises = updateSectionDto.data.map((value) =>
      this.update(value.id, { index: value.index }),
    );

    return Promise.all(promises);
  }

  remove(id: number) {
    return this.prisma.section.delete({
      where: {
        id,
      },
    });
  }
}
