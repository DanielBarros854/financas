import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CryptoService } from 'src/crypto/crypto.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    CryptoService,
    JwtService,
  ],
})
export class UserModule {}
