import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvestmentInput, InvestmentType } from './investment.model';
import { customErrorHandler } from 'src/shared/customErrors';

@Injectable()
export class InvestmentService {
  constructor(private ormService: PrismaService) {}

  async investmentAdd(fields: InvestmentInput): Promise<InvestmentType> {
    try {
      const new_investment = await this.ormService.investment.create({
        data: fields,
      });

      return new_investment;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async investments(id?: number): Promise<InvestmentType[]> {
    try {
      const investments_data = await this.ormService.investment.findMany({
        where: {
          id,
        },
      });

      return investments_data;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async investmentRemove(id: number): Promise<{ removed: number }> {
    try {
      const investment = await this.ormService.investment.delete({
        where: {
          id,
        },
      });

      if (investment) {
        return { removed: 1 };
      }

      return { removed: 0 };
    } catch {
      return { removed: 0 };
    }
  }
}
