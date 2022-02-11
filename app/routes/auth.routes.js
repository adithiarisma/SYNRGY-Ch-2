const express = require("express");
const routes = express.Router();
const { verifySignUp } = require("../middlewares");

const controller = require("../controllers/auth.controller");

// app.use(Express.static(__dirname + "/public"));
// app.use(Express.static(__dirname + "/views"));

// Home

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

  app.post("/api/auth/signin", controller.signin);

  app.get("/login", controller.getLogin);
};
