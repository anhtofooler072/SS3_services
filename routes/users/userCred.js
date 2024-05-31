import { Router } from "express";
import userCredController from "../../controllers/credentials/userCred.js";

const credRouter = Router();

credRouter.post("/register", userCredController.register);
credRouter.post("/tokenize", userCredController.tokenize);

export default credRouter;
