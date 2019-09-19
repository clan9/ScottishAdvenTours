const express = require("express");
require("../services/passport");
const passport = require("passport");
const UserController = require("../controllers/user");

const requireAuth = passport.authenticate("jwt", { session: false });

const router = express.Router();

// @route   GET /api/user
// @desc    get a user from token
// @access  Private
router.get("/", requireAuth, UserController.getUser);

module.exports = router;
