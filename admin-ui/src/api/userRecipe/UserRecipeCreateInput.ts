import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRecipeCreateInput = {
  recipeId: RecipeWhereUniqueInput;
  userId?: UserWhereUniqueInput | null;
};
