const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logout, forgetPassword, resetPassword } = require("../controllers/userController")

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgetPassword").post(forgetPassword);
router.route("/password/reset/:token").put(resetPassword)
router.route("/logout").get(logout)
module.exports = router;