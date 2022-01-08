import { PrismaService } from "nestjs-prisma";
import { Prisma, UserRecipe, Recipe, User } from "@prisma/client";

export class UserRecipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserRecipeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeFindManyArgs>
  ): Promise<number> {
    return this.prisma.userRecipe.count(args);
  }

  async findMany<T extends Prisma.UserRecipeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeFindManyArgs>
  ): Promise<UserRecipe[]> {
    return this.prisma.userRecipe.findMany(args);
  }
  async findOne<T extends Prisma.UserRecipeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeFindUniqueArgs>
  ): Promise<UserRecipe | null> {
    return this.prisma.userRecipe.findUnique(args);
  }
  async create<T extends Prisma.UserRecipeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeCreateArgs>
  ): Promise<UserRecipe> {
    return this.prisma.userRecipe.create<T>(args);
  }
  async update<T extends Prisma.UserRecipeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeUpdateArgs>
  ): Promise<UserRecipe> {
    return this.prisma.userRecipe.update<T>(args);
  }
  async delete<T extends Prisma.UserRecipeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserRecipeDeleteArgs>
  ): Promise<UserRecipe> {
    return this.prisma.userRecipe.delete(args);
  }

  async getRecipeId(parentId: string): Promise<Recipe | null> {
    return this.prisma.userRecipe
      .findUnique({
        where: { id: parentId },
      })
      .recipeId();
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.userRecipe
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}
