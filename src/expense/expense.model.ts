import { Field, ObjectType, Int, InputType, Float } from '@nestjs/graphql';

@ObjectType()
export class ExpenseType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  cost: number;

  @Field()
  automatic_billing: boolean;

  @Field()
  collection_day: Date;

  @Field()
  essential: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@InputType()
export class ExpenseInput {
  @Field()
  name: string;

  @Field(() => Float)
  cost: number;

  @Field()
  automatic_billing: boolean;

  @Field()
  collection_day: Date;

  @Field()
  essential: boolean;
}

@InputType()
export class ExpenseUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  cost?: number;

  @Field({ nullable: true })
  automatic_billing?: boolean;

  @Field({ nullable: true })
  collection_day?: Date;

  @Field({ nullable: true })
  essential?: boolean;
}
