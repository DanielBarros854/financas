import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserSchema {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
