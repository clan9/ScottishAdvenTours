const express = require("express");
require("../services/passport");
const passport = require("passport");
const PaymentsController = require("../controllers/payments");

const requireAuth = passport.authenticate("jwt", { session: false });

const router = express.Router();

//@route POST /api/payments
//@desc Make a payment
//@access Private
router.post("/", requireAuth, PaymentsController.makePayment);

module.exports = router;
