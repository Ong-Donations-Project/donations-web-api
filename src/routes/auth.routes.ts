import { Router } from "express";
import { AuthController } from "../auth/infrastructure/controllers/auth-controller";

export default class AuthRouter {
  private readonly router: Router;
  private readonly authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const authController = this.authController;

    this.router.post("/create", authController.create);
  }

  public getRouter(): Router {
    return this.router;
  }
}