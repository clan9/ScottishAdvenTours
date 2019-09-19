const express = require("express");
require("../services/passport");
const passport = require("passport");
const ReviewsController = require("../controllers/reviews");

const requireAuth = passport.authenticate("jwt", { session: false });

const router = express.Router();

//@route GET /api/reviews/
//@desc GET all reviews
//@access Public
router.get("/", ReviewsController.getReviews);

//@route GET /api/reviews/:id
//@desc GET single review
//@access Private
router.get("/:id", requireAuth, ReviewsController.getReview);

// @route POST /api/reviews/
// @desc Add a review
// @access Private
router.post("/", requireAuth, ReviewsController.addReview);

//@route DELETE /api/reviews/:id
//@desc DELETE a review by id
//@access Private
router.delete("/:id", requireAuth, ReviewsController.deleteReview);

//@route PATCH /api/reviews/:id
//@desc EDIT a review by id
//@access Private
router.patch("/:id", requireAuth, ReviewsController.editReview);

module.exports = router;
