import productModel from "../../models/products.js";

const productsController = {
  getProducts: async (req, res) => {
    const products = await productModel.find({});
    console.log('getProducts');
    res.send(products);
  },
  getProductById: async (req, res) => {
    const product = await productModel.findById(req.params.id);
    res.send(product);
  }
};

export default productsController;