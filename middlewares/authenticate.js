import jwt from "jsonwebtoken";

const auth = {
  verifyToken: (req, res, next) => {
    try {
      const token = req.header("Authorization").split(" ")[1];
      if (!token) return res.status(401).send("Access Denied");
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.UserCredInfo = verified;
      console.log(verified); // testing purpose 
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};

export default auth;
