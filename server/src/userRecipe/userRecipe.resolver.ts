import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserRecipeResolverBase } from "./base/userRecipe.resolver.base";
import { UserRecipe } from "./base/UserRecipe";
import { UserRecipeService } from "./userRecipe.service";

@graphql.Resolver(() => UserRecipe)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserRecipeResolver extends UserRecipeResolverBase {
  constructor(
    protected readonly service: UserRecipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
