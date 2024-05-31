import { Router } from "express";
import userCredController from "../../controllers/credentials/userCred.js";
import auth from "../../middlewares/authenticate.js";


const credRouter = Router();

credRouter.post("/register", userCredController.register);
credRouter.post("/tokenize", userCredController.tokenize);
credRouter.post("/authtest", auth.verifyToken);

export default credRouter;
