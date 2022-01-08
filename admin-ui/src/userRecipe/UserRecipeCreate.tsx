import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RecipeTitle } from "../recipe/RecipeTitle";
import { UserTitle } from "../user/UserTitle";

export const UserRecipeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="recipe.id" reference="Recipe" label="recipe_id">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
