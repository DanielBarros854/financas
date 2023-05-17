import { Arg, Int, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { type User } from '@prisma/client'
import { UserWhereInput } from '../../prisma/generated/type-graphql'

import { UserSchema } from '../schemas'
import { UserService } from '../services'

@Resolver(UserSchema)
@Service()
export class UserResolver {
  constructor (private readonly userService: UserService) {}

  @Query(() => UserSchema)
  async user (
    @Arg('id', () => Int) id: number
  ): Promise<User> {
    return await this.userService.getById(id)
  }

  @Query(() => [UserSchema])
  async users (
    @Arg('where', () => UserWhereInput, { nullable: true }) where?: UserWhereInput
    // erro aqui
  ): Promise<User[]> {
    return await this.userService.getAll(where)
  }
}
