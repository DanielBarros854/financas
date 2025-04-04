import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CryptoService } from 'src/crypto/crypto.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    CryptoService,
    JwtService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
