import productModel from "../../models/products.js";

const productsController = {
  getProducts: async (req, res) => {
    const products = await productModel.find({});
    console.log('getProducts');
    res.send(products);
  },
};

export default productsController;