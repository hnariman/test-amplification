import { UserRecipeWhereInput } from "./UserRecipeWhereInput";
import { UserRecipeOrderByInput } from "./UserRecipeOrderByInput";

export type UserRecipeFindManyArgs = {
  where?: UserRecipeWhereInput;
  orderBy?: UserRecipeOrderByInput;
  skip?: number;
  take?: number;
};
