import { ArgsType, Field } from "@nestjs/graphql";
import { UserRecipeWhereUniqueInput } from "./UserRecipeWhereUniqueInput";

@ArgsType()
class UserRecipeFindUniqueArgs {
  @Field(() => UserRecipeWhereUniqueInput, { nullable: false })
  where!: UserRecipeWhereUniqueInput;
}

export { UserRecipeFindUniqueArgs };
