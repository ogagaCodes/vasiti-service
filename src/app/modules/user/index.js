const { Router } = require("express");
const validateRequest = require("../../../middlewares/validateRequest");
const Schema = require("./user.schema");
const userController = require("./user.controller");
const { checkAuth } = require("../../../middlewares/authorize");

const router = Router();

router.post(
  "/signup",
  checkAuth,
  validateRequest(userSchema.searchByUsernameSchema, "body"),
  userController
);

router.post(
  "/logon",
  validateRequest(userSchema.sendTokenSchema, "body"),
  userController
);

module.exports = router;
