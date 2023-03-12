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

import { SectionsService } from './sections.service';

import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller('quizes/:quizId/sections')
@ApiTags('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  create(
    @Body() createSectionDto: CreateSectionDto,
    @Param('quizId') quizId: string,
  ) {
    return this.sectionsService.create(+quizId, createSectionDto);
  }

  @Get()
  findAll(@Param('quizId') quizId: string) {
    return this.sectionsService.findAll(+quizId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('quizId') quizId: string) {
    return this.sectionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
    @Param('quizId') quizId: string,
  ) {
    return this.sectionsService.update(+id, updateSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('quizId') quizId: string) {
    return this.sectionsService.remove(+id);
  }
}
