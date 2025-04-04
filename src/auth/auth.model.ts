import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class AuthType {
  @Field()
  token: string;
}

@InputType()
export class AuthInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

export class LoggedUserType {
  id: number;
  email: string;
}
