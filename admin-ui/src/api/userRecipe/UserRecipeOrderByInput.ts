import { SortOrder } from "../../util/SortOrder";

export type UserRecipeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  recipeIdId?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
