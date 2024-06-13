import { Router } from "express";
import productsController from "../../controllers/products/products.js";
import orderingController from "../../controllers/ordering/ordering.js";
import auth from "../../middlewares/authenticate.js";

const universalRouter = Router();

universalRouter.get("/fetchproducts", productsController.getProducts);
universalRouter.get("/fetchproducts/:id", productsController.getProductById);
universalRouter.post("/ordering", orderingController.checkout);
universalRouter.post("/finding", productsController.findProduct);
universalRouter.post("/addfavourites",auth.verifyToken, productsController.addFavourites);

export default universalRouter;