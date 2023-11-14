/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { AuthService } from "../../application/auth-service";
import { AuthPrismaRepository } from "../repositories/auth-prisma.respository";

export class AuthController {
  private readonly AuthService: AuthService;

  constructor() {
    const authRepository = new AuthPrismaRepository();
    this.AuthService = new AuthService(authRepository);
  }

  public create = async (req: Request, res: Response) => {
    try {
      const user = await this.AuthService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  };
}