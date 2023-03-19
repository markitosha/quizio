import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsNumber()
  readonly index: number;
}
