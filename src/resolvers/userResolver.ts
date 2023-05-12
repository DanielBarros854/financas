import { Arg, Int, Query, Resolver } from "type-graphql";
import { UserSchema } from "../schemas";
import { User } from "@prisma/client";
import { UserService } from "../services";

@Resolver(UserSchema)
export class UserResolver {
  constructor(private userService: UserService = new UserService) {}

  @Query(() => UserSchema)
  async user(
    @Arg('id', () => Int) id: number
  ): Promise<User> {
    return this.userService.user(id)
  }
}
