import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsOptional()
  readonly type?: string;

  @IsString()
  @IsOptional()
  readonly answer?: number;

  @IsString()
  @IsOptional()
  readonly question?: string;

  @IsNumber()
  @IsOptional()
  readonly index?: number;

  @IsArray()
  @IsOptional()
  readonly variants?: string[];

  @IsNumber()
  @IsOptional()
  readonly id?: number;
}
