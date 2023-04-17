import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { QuestionsService } from './questions.service';

import { CreateQuestionDto } from './dto/create-question.dto';
import {
  UpdateQuestionDto,
  UpdateQuestionsDto,
} from './dto/update-question.dto';

@Controller('quizes/:quizId/sections/:sectionId/questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(
    @Body() createQuestionDto: CreateQuestionDto,
    @Param('quizId') quizId: string,
    @Param('sectionId') sectionId: string,
  ) {
    return this.questionsService.create(quizId, sectionId, createQuestionDto);
  }

  @Get()
  findAll(
    @Param('quizId') quizId: string,
    @Param('sectionId') sectionId: string,
  ) {
    return this.questionsService.findAll(sectionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Patch()
  updateIndexes(@Body() updateQuestionsDto: UpdateQuestionsDto) {
    return this.questionsService.updateIndexes(updateQuestionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
