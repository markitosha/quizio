import { IsNumber, IsString } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly index: number;
}
