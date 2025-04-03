import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ExpenseInput, ExpenseType, ExpenseUpdateInput } from './expense.model';
import { ExpenseService } from './expense.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';

@Resolver()
export class ExpenseResolver {
  constructor(private expenseService: ExpenseService) {}

  @Query(() => [ExpenseType])
  async expenses(): Promise<ExpenseType[]> {
    return this.expenseService.expenses();
  }

  @Mutation(() => ExpenseType)
  async expenseAdd(@Args('fields') fields: ExpenseInput): Promise<ExpenseType> {
    return this.expenseService.expenseAdd(fields);
  }

  @Mutation(() => ExpenseType)
  async expenseUpdate(
    @Args('id', Int) id: number,
    @Args('fields') fields: ExpenseUpdateInput,
  ): Promise<ExpenseType> {
    return this.expenseService.expenseUpdate(id, fields);
  }

  @Mutation(() => Removed)
  async expenseRemove(@Args('id', Int) id: number): Promise<Removed> {
    return this.expenseService.expenseRemove(id);
  }
}
