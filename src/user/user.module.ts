import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CryptoService } from 'src/crypto/crypto.service';

@Module({
  providers: [UserResolver, UserService, PrismaService, CryptoService],
})
export class UserModule {}
