import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  steps?: SortOrder;
  updatedAt?: SortOrder;
};
