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

import { QuizesService } from './quizes.service';

import { UpdateQuizeDto } from './dto/update-quize.dto';

@Controller('quizes')
@ApiTags('quize')
export class QuizesController {
  constructor(private readonly quizesService: QuizesService) {}

  @Post()
  create() {
    return this.quizesService.create();
  }

  @Get()
  findAll() {
    return this.quizesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizeDto: UpdateQuizeDto) {
    return this.quizesService.update(+id, updateQuizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizesService.remove(+id);
  }
}
