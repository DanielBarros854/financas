import { Field, ObjectType, Int, InputType, Float } from '@nestjs/graphql';

@ObjectType()
export class InvestmentType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  share_value: number;

  @Field(() => Int)
  amount: number;

  @Field()
  purchase_date: Date;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@InputType()
export class InvestmentInput {
  @Field()
  name: string;

  @Field(() => Float)
  share_value: number;

  @Field(() => Int)
  amount: number;

  @Field()
  purchase_date: Date;
}
