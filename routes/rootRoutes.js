import { Router } from "express";
import universalRouter from "./universal/products.js";
import userRouter from "./users/userCred.js";

const rootRouter = Router();

rootRouter.use("/universal", universalRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;