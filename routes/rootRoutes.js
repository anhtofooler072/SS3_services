import { Router } from "express";
import universalRouter from "./universal/products.js";

const rootRouter = Router();

rootRouter.use("/universal", universalRouter);

export default rootRouter;