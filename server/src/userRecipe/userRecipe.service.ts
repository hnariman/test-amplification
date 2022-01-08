import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserRecipeServiceBase } from "./base/userRecipe.service.base";

@Injectable()
export class UserRecipeService extends UserRecipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
