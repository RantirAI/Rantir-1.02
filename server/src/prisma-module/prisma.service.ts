import * as argon2 from 'argon2';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private config: ConfigService) {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      const prisma = new PrismaClient();

      await prisma.permission.createMany({
        data: [
          { id: 1, name: 'admin' },
          { id: 2, name: 'member' },
          { id: 3, name: 'viewer' }
        ],
        skipDuplicates: true
      });
    } catch (e) {
      throw e;
    }
  }
}
