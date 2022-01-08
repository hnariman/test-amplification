import { ArgsType, Field } from "@nestjs/graphql";
import { UserRecipeCreateInput } from "./UserRecipeCreateInput";

@ArgsType()
class CreateUserRecipeArgs {
  @Field(() => UserRecipeCreateInput, { nullable: false })
  data!: UserRecipeCreateInput;
}

export { CreateUserRecipeArgs };
