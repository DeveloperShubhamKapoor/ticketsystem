const express = require("express");
const UserModel = require("../../model/users.model");
const bcrypt = require("bcrypt");
const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  const { email, password,name } = req.body;
  const isPresent = await UserModel.findOne({ email });
  if (isPresent) {
    res.send({ msg: "Email already present ",signupSuccess:false });
  } 
    bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "Wrong Credentials", signupSuccess: false });
        } 
        else {
          const user = new UserModel({ email, password: hash,name:name });
          await user.save();
          res.send({ msg: "Signup Successful", signupSuccess: true });
        }
    });
    
});

module.exports = signupRouter;