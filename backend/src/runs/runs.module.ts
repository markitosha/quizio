import { Module } from '@nestjs/common';

import { PrismaService } from '../db/prisma.service';
import { RunsService } from './runs.service';

import { RunsController } from './runs.controller';

@Module({
  controllers: [RunsController],
  providers: [RunsService, PrismaService],
})
export class RunsModule {}
