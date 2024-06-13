import { Router } from "express";
import userCredController from "../../controllers/credentials/userCred.js";
import auth from "../../middlewares/authenticate.js";

const credRouter = Router();

credRouter.post("/register", userCredController.register);

/*
    This is a two steps process
    When the user logs in, the server will send back a token using tokenize controller
    the token will be saved in the local storage on client side
    then that token from the local storage will be send to the server through /getUser endpoint.
*/

// first step
credRouter.post("/tokenize", userCredController.tokenize);
// second step
credRouter.get("/getUser", auth.verifyToken, userCredController.getUser);

// refresh token
credRouter.get("/refreshToken", userCredController.refreshToken);
export default credRouter;
