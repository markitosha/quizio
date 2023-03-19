import { IsArray, IsNumber } from 'class-validator';

class SectionDto {
  @IsNumber()
  readonly index: number;

  @IsNumber()
  readonly id: number;
}

export class UpdateSectionsDto {
  @IsArray()
  readonly data: SectionDto[];
}
