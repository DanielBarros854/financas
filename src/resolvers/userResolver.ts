import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { type User } from '@prisma/client'
import { UserWhereInput, UserWhereUniqueInput } from '../../prisma/generated/type-graphql'

import { UserSchema } from '../schemas'
import { UserService } from '../services'
import { UserInputInterface } from '../inputs'

@Resolver(UserSchema)
@Service()
export class UserResolver {
  constructor (private readonly userService: UserService) {}

  @Query(() => UserSchema)
  async user (
    @Arg('where', () => UserWhereUniqueInput) where: UserWhereUniqueInput
  ): Promise<User> {
    return await this.userService.getUnique(where)
  }

  @Query(() => [UserSchema])
  async users (
    @Arg('where', () => UserWhereInput, { nullable: true }) where?: UserWhereInput
  ): Promise<User[]> {
    return await this.userService.getAll(where)
  }

  @Mutation(() => UserSchema)
  async userAdd (
    @Arg('input', () => UserInputInterface) input: UserInputInterface
  ): Promise<User> {
    return await this.userService.create(input)
  }
}
