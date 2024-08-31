import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
}
