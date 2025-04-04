import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthInput, AuthType } from './auth.model';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private loginService: AuthService) {}

  @Mutation(() => AuthType)
  async login(@Args('fields') fields: AuthInput): Promise<AuthType> {
    return this.loginService.login(fields);
  }
}
