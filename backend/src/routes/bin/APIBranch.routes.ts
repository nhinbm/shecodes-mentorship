import { Router } from "express";
import AuthRouter from "../auth.route";

class APIBranch {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const { router: _authRouter } = new AuthRouter();
    this.router.use("/auth", _authRouter);
  }
}

export default APIBranch;
