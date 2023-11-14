import { Router } from "express";
import AuthRouter from "./auth.routes";

export default class IndexRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    const authRouter = new AuthRouter();

    this.router.use("/auth", authRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}