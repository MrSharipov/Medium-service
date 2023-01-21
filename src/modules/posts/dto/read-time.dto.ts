import { IsNotEmpty } from 'class-validator';

export class ReadTimeDto {
  @IsNotEmpty()
  time: number;
}
