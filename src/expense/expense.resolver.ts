import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { ExpenseInput, ExpenseType, ExpenseUpdateInput } from './expense.model';
import { ExpenseService } from './expense.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Resolver()
export class ExpenseResolver {
  constructor(private expenseService: ExpenseService) {}

  @UseGuards(AuthGuard)
  @Query(() => [ExpenseType])
  async expenses(@Context('req') req: Request): Promise<ExpenseType[]> {
    return this.expenseService.expenses(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => ExpenseType)
  async expenseAdd(
    @Args('fields') fields: ExpenseInput,
    @Context('req') req: Request,
  ): Promise<ExpenseType> {
    return this.expenseService.expenseAdd(fields, req.user);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => ExpenseType)
  async expenseUpdate(
    @Args('id', Int) id: number,
    @Args('fields') fields: ExpenseUpdateInput,
  ): Promise<ExpenseType> {
    return this.expenseService.expenseUpdate(id, fields);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Removed)
  async expenseRemove(@Args('id', Int) id: number): Promise<Removed> {
    return this.expenseService.expenseRemove(id);
  }
}
