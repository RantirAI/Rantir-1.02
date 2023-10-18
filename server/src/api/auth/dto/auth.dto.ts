import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
	@ApiProperty({ example: 'mhosain@sysonex.dev' })
	@IsNotEmpty({ message: 'Email cannot be empty' })
	@IsEmail({}, { message: 'Please enter a valid email' })
	email: string;

	@ApiProperty({ example: 'strong-password' })
	@IsNotEmpty({ message: 'Password cannot be empty' })
	@Length(8, 256, { message: 'Password must have at least 8 characters' })
	password: string;
}

export class SignUpDto extends AuthDto {
	@ApiProperty({ example: 'John Doe' })
	@IsNotEmpty({ message: 'First name cannot be empty' })
	name: string;

	@ApiProperty({ example: 'johndoe' })
	@IsNotEmpty({ message: 'Username cannot be empty' })
	username: string;
}
