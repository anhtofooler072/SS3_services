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
      res.send("Đăng ký thành công");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  /* 
    @param {email, password} 
    @returns {token}
    todo - save the token in the local storage then use it to access the protected routes
  */
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

      const payload = {
        email,
        _id: loginInfo._id,
      };
      const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "50s" });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
      const token = {
        accessToken,
        refreshToken,
      };
      res.status(200).send(token);
    } catch (error) {
      res.status;
    }
  },

  refreshToken: async (req, res) => {
    try {
      const token = req.header("Authorization").split(" ")[1];
      if (!token) return res.status(401).send("Access Denied");
      const verified = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      const payload = {
        email: verified.email,
        _id: verified._id,
      };
      const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "50s" });
      res.status(200).send(accessToken);
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  },
  /*
    @param {email}
    @returns {username, email, phone_number}
  */
  getUser: async (req, res) => {
    try {
      const { email } = req.UserCredInfo;
      const UserInfo = await userModel.findOne({ email: email });
      const UserInfoFiltered = {
        userId: UserInfo._id,
        username: UserInfo.username,
        email: UserInfo.email,
        phone_number: UserInfo.phone_number,
      };
      res.status(200).send(UserInfoFiltered);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};

export default userCredController;
