import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { AuthDto, SignUpDto } from './dto';
import { IServiceData, ServiceError } from '@/shared/interfaces';

@Injectable()
export class AuthService {
	constructor(private jwt: JwtService, private config: ConfigService) {}

	userSelectOptions = {
		id: true,
		firstName: true,
		lastName: true,
		username: true,
		email: true,
		isAdmin: true,
		active: true,
		createdAt: true,
		updatedAt: true,
		password: true
	};

	async signIn(signInDto: AuthDto) {
		try {
			const resp = 'User Signed in';
			return { data: resp } as IServiceData;
		} catch (e) {
			return {
				prismaError: e
			} as IServiceData;
		}
	}

	async signUp(signUpDtp: SignUpDto) {
		try {
			return { data: 'User Signed up' } as IServiceData;
		} catch (e) {
			return {
				prismaError: e
			} as IServiceData;
		}
	}

	async signToken(user: object): Promise<{ token: string }> {
		const payload = {
			user
		};

		const secret = this.config.get('JWT_SECRET');

		const token = await this.jwt.signAsync(payload, {
			expiresIn: '12h',
			secret: secret
		});

		return {
			token: token
		};
	}
}
