import { IsOptional, IsString } from 'class-validator';

export class CreateQuizeDto {
  @IsString()
  @IsOptional()
  readonly name?: string;
}
