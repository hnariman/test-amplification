import { Module } from "@nestjs/common";
import { UserRecipeModuleBase } from "./base/userRecipe.module.base";
import { UserRecipeService } from "./userRecipe.service";
import { UserRecipeController } from "./userRecipe.controller";
import { UserRecipeResolver } from "./userRecipe.resolver";

@Module({
  imports: [UserRecipeModuleBase],
  controllers: [UserRecipeController],
  providers: [UserRecipeService, UserRecipeResolver],
  exports: [UserRecipeService],
})
export class UserRecipeModule {}
