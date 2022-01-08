import { UserRecipe } from "../userRecipe/UserRecipe";

export type Recipe = {
  createdAt: Date;
  description: string | null;
  id: string;
  steps: string | null;
  updatedAt: Date;
  userRecipes?: Array<UserRecipe>;
};
