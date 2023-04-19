import { PartialType } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}

export class UpdateQuestionsDto {
  @IsArray()
  readonly data: UpdateQuestionDto[];
}
