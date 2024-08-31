import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput, UserType } from './user.model';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserType])
  async users(): Promise<UserType[]> {
    return this.userService.getUsers();
  }

  @Mutation(() => UserType)
  async createUser(@Args('fields') fields: CreateUserInput): Promise<UserType> {
    return this.userService.createUser(fields);
  }
}
