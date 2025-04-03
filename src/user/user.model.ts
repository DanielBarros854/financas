import { Field, ObjectType, Int, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@InputType()
export class UserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  name?: string;
}
