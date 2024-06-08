import { Router } from "express";
import productsController from "../../controllers/products/products.js";
import orderingController from "../../controllers/ordering/ordering.js";

const universalRouter = Router();

universalRouter.get("/fetchproducts", productsController.getProducts);
universalRouter.get("/fetchproducts/:id", productsController.getProductById);
universalRouter.post("/ordering", orderingController.checkout);

export default universalRouter;