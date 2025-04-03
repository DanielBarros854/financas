import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseInput, ExpenseType, ExpenseUpdateInput } from './expense.model';
import { customErrorHandler } from 'src/shared/customErrors';
import { Removed } from 'src/shared/types/removed';

@Injectable()
export class ExpenseService {
  constructor(private readonly ormService: PrismaService) {}

  async expenseAdd(fields: ExpenseInput): Promise<ExpenseType> {
    try {
      const new_expense = await this.ormService.expense.create({
        data: fields,
      });

      return new_expense;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async expenses(id?: number): Promise<ExpenseType[]> {
    try {
      const expenses_data = await this.ormService.expense.findMany({
        where: {
          id,
        },
      });

      return expenses_data;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async expenseUpdate(
    id: number,
    fields: ExpenseUpdateInput,
  ): Promise<ExpenseType> {
    try {
      const expense = await this.ormService.expense.update({
        where: {
          id,
        },
        data: fields,
      });

      return expense;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async expenseRemove(id: number): Promise<Removed> {
    try {
      const expense = await this.ormService.expense.delete({
        where: {
          id,
        },
      });

      if (expense) {
        return { removed: true };
      }

      return { removed: false };
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }
}
