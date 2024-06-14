import orderModel from "../../models/orders.js";

const orderingController = {
  checkout: async (req, res) => {
    try {
      const { name, email, address, phone, items, timeStamp } = req.body;
      const { _id: userId } = req.UserCredInfo;
      const newOrder = new orderModel({
        userId,
        name,
        email,
        address,
        phone,
        items,
        timeStamp,
      });
      await newOrder.save();
      res.send(newOrder);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  getOrdersHistory: async (req, res) => { 
    try {
      const {email} = req.UserCredInfo;
      const orders = await orderModel.find({email});
      res.send(orders);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send("An error occurred while trying to get the orders history");
    }
  }
};

export default orderingController;
