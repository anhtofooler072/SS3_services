import userModel from "../../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userCredController = {
  register: async (req, res) => {
    try {
      const { username, email, password, phone_number } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = new userModel({
        username,
        email,
        password: hashedPassword,
        phone_number,
        salt,
      });
      await user.save();
      res.send(user)
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  tokenize: async (req, res) => {
    try {
      const { email, password } = req.body;
      const loginInfo = await userModel.findOne({ email });
      if (!loginInfo) {
        return res.status(400).send("Email không tồn tại");
      }
      const hashedPassword = await bcrypt.hash(password, loginInfo.salt);
      if (hashedPassword !== loginInfo.password) {
        return res.status(400).send("Mật khẩu không đúng");
      }
      const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
      res.status(200).send(token);
    } catch (error) {
      res.status;
    }
  },
};

export default userCredController;
