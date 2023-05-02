import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { RunsService } from './runs.service';

import { CreateRunDto } from './dto/create-run.dto';
import { UpdateRunDto } from './dto/update-run.dto';

@Controller('quizes/:quizId/runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Post()
  create(@Body() createRunDto: CreateRunDto, @Param('quizId') quizId: string) {
    return this.runsService.create(createRunDto, +quizId);
  }

  @Get()
  findAll(@Param('quizId') quizId: string) {
    return this.runsService.findAll(+quizId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('quizId') quizId: string) {
    return this.runsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRunDto: UpdateRunDto,
    @Param('quizId') quizId: string,
  ) {
    return this.runsService.update(+id, updateRunDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('quizId') quizId: string) {
    return this.runsService.remove(+id);
  }
}
