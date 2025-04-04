import { Field, ObjectType, Int, InputType, Float } from '@nestjs/graphql';

@ObjectType()
export class EarningType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  value: number;

  @Field()
  date: Date;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}

@InputType()
export class EarningInput {
  @Field()
  name: string;

  @Field(() => Float)
  value: number;

  @Field()
  date: Date;
}

@InputType()
export class EarningUpdateInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  value?: number;

  @Field({ nullable: true })
  date?: Date;
}
