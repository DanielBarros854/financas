import { Module } from '@nestjs/common';
import { InvestmentResolver } from './investment.resolver';
import { InvestmentService } from './investment.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [InvestmentResolver, InvestmentService, PrismaService],
})
export class InvestmentModule {}
