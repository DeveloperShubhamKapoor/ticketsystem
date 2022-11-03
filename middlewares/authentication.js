const jwt = require("jsonwebtoken");
const authentication = (req, res, next) => {
  if (req.headers.token) {

    const token = req.headers.token;

    jwt.verify(token,"mysecretkey", async (err, decoded) => {
      if (err) {
        res.send({msg:"Something went wrong"});
      } 
      else {
        req.body.userId = decoded.email;
        next();
      }
    });
  } else {
    res.send({msg:"Not Authorized! Pls login again"});
  }
};

module.exports = authentication;