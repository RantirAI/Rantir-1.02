import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty({ message: 'First name cannot be empty' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  lastName: string;

  @ApiProperty({ example: 'admin@gmail.com' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @ApiProperty({ example: 'password' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @Length(8, 256, { message: 'Password must have at least 8 characters' })
  password: string;

  @ApiProperty({ example: 'Demo Team' })
  @IsNotEmpty({ message: 'Team name cannot be empty' })
  teamName: string;
}
