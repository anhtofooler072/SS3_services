import orderModel from "../../models/orders.js";

const orderingController = {
  checkout: async (req, res) => {
    try {
      const { name, email, address, phone, items, timeStamp } = req.body;
      const newOrder = new orderModel({
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
};

export default orderingController;
