import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Removed {
  @Field()
  removed: boolean;
}
