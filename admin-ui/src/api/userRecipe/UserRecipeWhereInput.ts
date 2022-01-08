import { StringFilter } from "../../util/StringFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRecipeWhereInput = {
  id?: StringFilter;
  recipeId?: RecipeWhereUniqueInput;
  userId?: UserWhereUniqueInput;
};
