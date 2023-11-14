import { IAuthRepository } from "src/auth/domain/interfaces/repository/IAuthRepository";
import prisma from "../../../../libs/prisma";
import prismaMock from "../../../../libs/__mocks__/prisma";
import { User } from "@prisma/client";

export class AuthPrismaRepository implements IAuthRepository {
  private readonly prisma;

  constructor() {
    process.env.NODE_ENV !== "test" ? this.prisma = prisma : this.prisma = prismaMock;
  }

  public async create(user: User): Promise<User> {
    return await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name
      }
    });
  }
}