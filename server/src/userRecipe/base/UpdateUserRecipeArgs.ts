import { ArgsType, Field } from "@nestjs/graphql";
import { UserRecipeWhereUniqueInput } from "./UserRecipeWhereUniqueInput";
import { UserRecipeUpdateInput } from "./UserRecipeUpdateInput";

@ArgsType()
class UpdateUserRecipeArgs {
  @Field(() => UserRecipeWhereUniqueInput, { nullable: false })
  where!: UserRecipeWhereUniqueInput;
  @Field(() => UserRecipeUpdateInput, { nullable: false })
  data!: UserRecipeUpdateInput;
}

export { UpdateUserRecipeArgs };
