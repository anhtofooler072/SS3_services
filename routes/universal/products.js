import { Router } from "express";
import productsController from "../../controllers/products/products.js";

const universalRouter = Router();

universalRouter.get("/fetchproducts", productsController.getProducts);

export default universalRouter;