import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRecipeUpdateInput = {
  recipeId?: RecipeWhereUniqueInput;
  userId?: UserWhereUniqueInput | null;
};
