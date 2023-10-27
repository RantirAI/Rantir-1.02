import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@gmail.com' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @Length(8, 256, { message: 'Password must have at least 8 characters' })
  password: string;
}
