import { IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
