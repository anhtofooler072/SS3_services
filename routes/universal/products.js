import { Router } from "express";
import productsController from "../../controllers/products/products.js";

const universalRouter = Router();

universalRouter.get("/fetchproducts", productsController.getProducts);
universalRouter.get("/fetchproducts/:id", productsController.getProductById);

export default universalRouter;