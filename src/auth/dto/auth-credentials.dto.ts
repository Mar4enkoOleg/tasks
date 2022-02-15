import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString({ message: 'Username must be a string' })
  @MinLength(4, { message: 'Username length < 4' })
  @MaxLength(20, { message: 'Username length > 20' })
  username: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(3, { message: 'Password length < 3' })
  @MaxLength(20, { message: 'Password length > 20' })
  password: string;
}
