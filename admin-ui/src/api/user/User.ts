import { UserRecipe } from "../userRecipe/UserRecipe";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  userRecipes?: Array<UserRecipe>;
};
