import { UserRecipe as TUserRecipe } from "../api/userRecipe/UserRecipe";

export const USERRECIPE_TITLE_FIELD = "id";

export const UserRecipeTitle = (record: TUserRecipe): string => {
  return record.id || record.id;
};
