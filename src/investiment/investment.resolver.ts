import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { InvestmentInput, InvestmentType } from './investment.model';
import { InvestmentService } from './investment.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';

@Resolver()
export class InvestmentResolver {
  constructor(private investmentService: InvestmentService) {}

  @Query(() => [InvestmentType])
  async investments(): Promise<InvestmentType[]> {
    return this.investmentService.investments();
  }

  @Mutation(() => InvestmentType)
  async investmentAdd(
    @Args('fields') fields: InvestmentInput,
  ): Promise<InvestmentType> {
    return this.investmentService.investmentAdd(fields);
  }

  @Mutation(() => Removed)
  async investmentRemove(
    @Args('id', Int) id: number,
  ): Promise<{ removed: number }> {
    return this.investmentService.investmentRemove(id);
  }
}
