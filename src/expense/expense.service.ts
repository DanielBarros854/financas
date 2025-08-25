import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseInput, ExpenseType, ExpenseUpdateInput } from './expense.model';
import { customErrorHandler } from 'src/shared/customErrors';
import { Removed } from 'src/shared/types/removed';
import { LoggedUserType } from 'src/auth/auth.model';

@Injectable()
export class ExpenseService {
  constructor(private readonly ormService: PrismaService) {}

  async expenseAdd(
    fields: ExpenseInput,
    logged_user: LoggedUserType,
  ): Promise<ExpenseType> {
    try {
      const new_expense = await this.ormService.expense.create({
        data: {
          ...fields,
          user_id: logged_user.id,
        },
      });

      return new_expense;
    } catch (error: any) {
      throw customErrorHandler(error);
    }
  }

  async expenses(user_id: number): Promise<ExpenseType[]> {
    try {
      const expenses_data = await this.ormService.expense.findMany({
        where: {
          user_id,
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
