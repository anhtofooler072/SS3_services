import productModel from "../../models/products.js";
import userModel from "../../models/users.js";

const productsController = {
  getProducts: async (req, res) => {
    const products = await productModel.find({});
    console.log("getProducts");
    res.send(products);
  },

  getProductById: async (req, res) => {
    const product = await productModel.findById(req.params.id);
    res.send(product);
  },

  findProduct: async (req, res) => {
    try {
      const { name } = req.body;
      const result = await productModel.find({
        name: { $regex: name, $options: "i" },
      });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },

  addFavourites: async (req, res) => {
    try {
      const userId = req.UserCredInfo._id;
      const { productId } = req.body;
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(400).send("User not found");
      }
      const product = await productModel.findById(productId);
      if (!product) {
        return res.status(400).send("Product not found");
      }
      if (user.favourites.includes(productId)) {
        return res.status(400).send("Product already in favourites");
      }
      user.favourites.push(productId);
      await user.save();
      res.send(user.favourites);
    } catch (error) {
      console.log(error);
    }
  },
};

export default productsController;
