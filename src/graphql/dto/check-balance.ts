import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BalanceType {
  @Field()
  balance: number;
}

// export class BalanceType {
//   readonly balance: number
//  }