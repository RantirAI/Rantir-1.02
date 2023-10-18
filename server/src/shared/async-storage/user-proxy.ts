import { InjectableProxy } from 'nestjs-cls';

@InjectableProxy()
export class UserProxy {
	id: number;
	firstName: string;
	lastName: string;
	password: string;
	username: string;
	createdAt: Date;
	updatedAt: Date;
	email: string;
	active: boolean;
	isAdmin: boolean;
	enterpriseCategories: object[];
	groups: object[];
	roles: object[];
}
