import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import * as argon2 from 'argon2';

import { AppModule } from '@/app.module';
import { PrismaService } from '@/prisma/prisma.service';

describe('AuthController (E2E)', () => {
	let app: INestApplication;
	let prisma: PrismaService;

	const AUTH_LOGIN_URL = '/api/auth/login';

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		prisma = moduleFixture.get(PrismaService);
		await prisma.$connect();

		await app.useGlobalPipes(new ValidationPipe());
		await app.init();
	});

	afterEach(async () => {
		await app.close();
		await prisma.clearDatabase();
		await prisma.$disconnect();
	});

	describe(`${AUTH_LOGIN_URL} (POST)`, () => {
		it('should return 400 if email is invalid', () => {
			const testLoginData = {
				email: '@@invalid-email@email.com',
				password: 'test'
			};

			return request(app.getHttpServer())
				.post(AUTH_LOGIN_URL)
				.send(testLoginData)
				.expect(res => {
					expect(res.status).toBe(400);
					expect(res.body.error).toBe('Bad Request');
					expect(res.body.message[0]).toBe('Please enter a valid email');
				});
		});

		it('should return 400 if password does not contain at least 8 characters', () => {
			const testLoginData = {
				email: 'valid-email@gmail.com',
				password: 'small'
			};

			return request(app.getHttpServer())
				.post(AUTH_LOGIN_URL)
				.send(testLoginData)
				.expect(res => {
					expect(res.status).toBe(400);
					expect(res.body.error).toBe('Bad Request');
					expect(res.body.message[0]).toBe('Password must have at least 8 characters');
				});
		});

		it('should return 403 if email does not exist in the database', () => {
			const testLoginData = {
				email: 'does-not-exist@gmail.com',
				password: 'random-password'
			};

			return request(app.getHttpServer())
				.post(AUTH_LOGIN_URL)
				.send(testLoginData)
				.expect(res => {
					expect(res.status).toBe(403);
					expect(res.body.error).toBe('Forbidden');
					expect(res.body.message).toBe('Invalid Credential(s)');
				});
		});

		it('should return 200 (with a valid jwt token) when email and password match', async () => {
			await prisma.user.create({
				data: {
					email: 'test@email.com',
					password: await argon2.hash('password'),
					firstName: 'Test',
					lastName: 'User',
					username: 'username'
				}
			});

			const testLoginData = {
				email: 'test@email.com',
				password: 'password'
			};

			const validTokenRegex = /^[^.]+\.[^.]+\.[^.]+$/;

			const response = await request(app.getHttpServer())
				.post(AUTH_LOGIN_URL)
				.send(testLoginData)
				.expect(200);

			expect(Object.keys(response.body).includes('token')).toBeTruthy();
			expect(typeof response.body.token).toBe('string');
			expect(response.body.token.length).toBeGreaterThan(0);
			expect(validTokenRegex.test(response.body.token)).toBeTruthy();
		});
	});
});
