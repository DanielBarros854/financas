import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { InvestmentInput, InvestmentType } from './investment.model';
import { InvestmentService } from './investment.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Resolver()
export class InvestmentResolver {
  constructor(private investmentService: InvestmentService) {}

  @UseGuards(AuthGuard)
  @Query(() => [InvestmentType])
  async investments(): Promise<InvestmentType[]> {
    return this.investmentService.investments();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => InvestmentType)
  async investmentAdd(
    @Args('fields') fields: InvestmentInput,
    @Context('req') req: Request,
  ): Promise<InvestmentType> {
    return this.investmentService.investmentAdd(fields, req.user);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Removed)
  async investmentRemove(@Args('id', Int) id: number): Promise<Removed> {
    return this.investmentService.investmentRemove(id);
  }
}
