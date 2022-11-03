const express = require("express");
const UserModel = require("../../model/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  let findUser = await UserModel.findOne({ email });
  if (findUser) {
    let hashed = findUser.password;
    bcrypt.compare(password, hashed).then(function (result) {
      if (result) {
        let token = jwt.sign({ email: email }, "mysecretkey");
        res.send({ msg: "Login Successful", token: token });
      } 
      else {
        res.send({msg:"Invalid Credentials",token:""});
      }
    });
  } 
  else {
    res.send({msg:"User not found",token:""});
  }
});

module.exports = loginRouter;