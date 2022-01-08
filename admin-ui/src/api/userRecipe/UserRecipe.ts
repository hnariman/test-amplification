import { Recipe } from "../recipe/Recipe";
import { User } from "../user/User";

export type UserRecipe = {
  createdAt: Date;
  id: string;
  recipeId?: Recipe;
  updatedAt: Date;
  userId?: User | null;
};
