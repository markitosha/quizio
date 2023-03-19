import { Module } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';
import { SectionsService } from './sections.service';

import { SectionsController } from './sections.controller';

@Module({
  controllers: [SectionsController],
  providers: [SectionsService, PrismaService],
})
export class SectionsModule {}
