import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateUserRecipeArgs } from "./CreateUserRecipeArgs";
import { UpdateUserRecipeArgs } from "./UpdateUserRecipeArgs";
import { DeleteUserRecipeArgs } from "./DeleteUserRecipeArgs";
import { UserRecipeFindManyArgs } from "./UserRecipeFindManyArgs";
import { UserRecipeFindUniqueArgs } from "./UserRecipeFindUniqueArgs";
import { UserRecipe } from "./UserRecipe";
import { Recipe } from "../../recipe/base/Recipe";
import { User } from "../../user/base/User";
import { UserRecipeService } from "../userRecipe.service";

@graphql.Resolver(() => UserRecipe)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserRecipeResolverBase {
  constructor(
    protected readonly service: UserRecipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "read",
    possession: "any",
  })
  async _userRecipesMeta(
    @graphql.Args() args: UserRecipeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [UserRecipe])
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "read",
    possession: "any",
  })
  async userRecipes(
    @graphql.Args() args: UserRecipeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<UserRecipe[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "UserRecipe",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => UserRecipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "read",
    possession: "own",
  })
  async userRecipe(
    @graphql.Args() args: UserRecipeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<UserRecipe | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "UserRecipe",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => UserRecipe)
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "create",
    possession: "any",
  })
  async createUserRecipe(
    @graphql.Args() args: CreateUserRecipeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<UserRecipe> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "UserRecipe",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"UserRecipe"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        recipeId: {
          connect: args.data.recipeId,
        },

        userId: args.data.userId
          ? {
              connect: args.data.userId,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserRecipe)
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "update",
    possession: "any",
  })
  async updateUserRecipe(
    @graphql.Args() args: UpdateUserRecipeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<UserRecipe | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "UserRecipe",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"UserRecipe"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          recipeId: {
            connect: args.data.recipeId,
          },

          userId: args.data.userId
            ? {
                connect: args.data.userId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserRecipe)
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "delete",
    possession: "any",
  })
  async deleteUserRecipe(
    @graphql.Args() args: DeleteUserRecipeArgs
  ): Promise<UserRecipe | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Recipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "read",
    possession: "any",
  })
  async recipeId(
    @graphql.Parent() parent: UserRecipe,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Recipe | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Recipe",
    });
    const result = await this.service.getRecipeId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserRecipe",
    action: "read",
    possession: "any",
  })
  async userId(
    @graphql.Parent() parent: UserRecipe,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUserId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
