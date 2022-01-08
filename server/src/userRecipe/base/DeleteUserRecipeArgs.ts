import { ArgsType, Field } from "@nestjs/graphql";
import { UserRecipeWhereUniqueInput } from "./UserRecipeWhereUniqueInput";

@ArgsType()
class DeleteUserRecipeArgs {
  @Field(() => UserRecipeWhereUniqueInput, { nullable: false })
  where!: UserRecipeWhereUniqueInput;
}

export { DeleteUserRecipeArgs };
