import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserRecipeWhereInput } from "./UserRecipeWhereInput";
import { Type } from "class-transformer";
import { UserRecipeOrderByInput } from "./UserRecipeOrderByInput";

@ArgsType()
class UserRecipeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserRecipeWhereInput,
  })
  @Field(() => UserRecipeWhereInput, { nullable: true })
  @Type(() => UserRecipeWhereInput)
  where?: UserRecipeWhereInput;

  @ApiProperty({
    required: false,
    type: UserRecipeOrderByInput,
  })
  @Field(() => UserRecipeOrderByInput, { nullable: true })
  @Type(() => UserRecipeOrderByInput)
  orderBy?: UserRecipeOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserRecipeFindManyArgs };
