import { Recipe as TRecipe } from "../api/recipe/Recipe";

export const RECIPE_TITLE_FIELD = "steps";

export const RecipeTitle = (record: TRecipe): string => {
  return record.steps || record.id;
};
