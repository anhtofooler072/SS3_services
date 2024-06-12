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
  },
  findProduct: async (req, res) => {
    try {
      const {name} = req.body;
      const result = await productModel.find({name: {$regex: name, $options: 'i'}});
      res.send(result);
  } catch (error) {
    console.log(error);
  }
  },
};

export default productsController;