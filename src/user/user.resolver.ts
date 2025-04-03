import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserInput, UserType, UserUpdateInput } from './user.model';
import { UserService } from './user.service';
import { Int } from 'src/shared/types/int';
import { Removed } from 'src/shared/types/removed';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  async users(): Promise<UserType[]> {
    return this.userService.users();
  }

  @Mutation(() => UserType)
  async userAdd(@Args('fields') fields: UserInput): Promise<UserType> {
    return this.userService.userAdd(fields);
  }

  @Mutation(() => UserType)
  async userUpdate(
    @Args('id', Int) id: number,
    @Args('fields') fields: UserUpdateInput,
  ): Promise<UserType> {
    return this.userService.userUpdate(id, fields);
  }

  @Mutation(() => Removed)
  async userRemove(@Args('id', Int) id: number): Promise<Removed> {
    return this.userService.userRemove(id);
  }
}
