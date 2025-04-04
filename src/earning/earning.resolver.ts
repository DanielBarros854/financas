import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { EarningInput, EarningType, EarningUpdateInput } from './earning.model';
import { EarningService } from './earning.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Resolver()
export class EarningResolver {
  constructor(private earningService: EarningService) {}

  @UseGuards(AuthGuard)
  @Query(() => [EarningType])
  async earnings(@Context('req') req: Request): Promise<EarningType[]> {
    return this.earningService.earnings(req.user.id);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => EarningType)
  async earningAdd(
    @Args('fields') fields: EarningInput,
    @Context('req') req: Request,
  ): Promise<EarningType> {
    return this.earningService.earningAdd(fields, req.user);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => EarningType)
  async earningUpdate(
    @Args('id', Int) id: number,
    @Args('fields') fields: EarningUpdateInput,
  ): Promise<EarningType> {
    return this.earningService.earningUpdate(id, fields);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Removed)
  async earningRemove(@Args('id', Int) id: number): Promise<Removed> {
    return this.earningService.earningRemove(id);
  }
}
