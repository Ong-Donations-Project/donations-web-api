import { expect, describe, it, vi } from "vitest";
import prisma from "../libs/__mocks__/prisma";

vi.mock("../libs/prisma");

interface CreateUser {
  id: number;
  email: string;
  name: string;
}

export async function createUser(user: CreateUser) {
  return await prisma.user.create({
    data: user,
  });
}

describe("Example test", () => {
  it("should create user", async () => {

    const newUser: CreateUser = {
      id: 1,
      email: "test@example.com",
      name: "asd"
    };

    prisma.user.create.mockResolvedValue(newUser);

    try {
      const user = await createUser(newUser);
      console.log(user);
      
    } catch (error) {
      console.error(error);
    }

    await expect(createUser(newUser)).resolves.toEqual({
      id: 1,
      name: "asd",
      email: "test@example.com",
    });
  });
});
