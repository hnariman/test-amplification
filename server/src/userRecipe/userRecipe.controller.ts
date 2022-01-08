import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRecipeService } from "./userRecipe.service";
import { UserRecipeControllerBase } from "./base/userRecipe.controller.base";

@swagger.ApiTags("user-recipes")
@common.Controller("user-recipes")
export class UserRecipeController extends UserRecipeControllerBase {
  constructor(
    protected readonly service: UserRecipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
