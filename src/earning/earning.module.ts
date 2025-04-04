import { Module } from '@nestjs/common';
import { EarningResolver } from './earning.resolver';
import { EarningService } from './earning.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [EarningResolver, EarningService, PrismaService, JwtService],
})
export class EarningModule {}
