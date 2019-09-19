// Reviews controller

const Reviews = require("../models/Reviews");
const User = require("../models/User");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();

    if (!reviews) {
      return res.status(404).json({ msg: "There are no reviews yet" });
    }

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ msg: "Server error for getReviews" });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Reviews.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json(review);
  } catch (error) {
    res.status(500).json({ msg: "Server error for getReview (singular)" });
  }
};

exports.addReview = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { tour, title, body } = req.body;

    console.log("Review Form data:", tour, title, body);

    if (!tour) {
      return res
        .status(422)
        .json({ msg: "Please select the relevant tour you wish to review" });
    }

    if (!title || !body) {
      return res
        .status(422)
        .json({ msg: "Please complete the headline and body for your review" });
    }

    const newReview = new Reviews({
      user: req.user.id,
      name: user.name,
      tour,
      title,
      body
    });

    const review = await newReview.save();

    res.json(review);
  } catch (error) {
    res.status(500).json({ msg: "Server error for addReview" });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const reviewToDelete = await Reviews.findById(req.params.id);

    if (!reviewToDelete) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check that user is owner of review
    if (reviewToDelete.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "You are not authorised to delete this review" });
    }

    await reviewToDelete.remove();
    res.json(reviewToDelete);
  } catch (error) {
    res.status(500).json({ msg: "Server error for deleteReview" });
  }
};

exports.editReview = async (req, res) => {
  try {
    const { title, body } = req.body;
    const reviewToEdit = await Reviews.findById(req.params.id);

    if (!reviewToEdit) {
      return res.status(404).json({ msg: "Review not found" });
    }

    // Check that user is owner of review
    if (reviewToEdit.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "You are not authorised to edit this review" });
    }

    if (title) {
      reviewToEdit.title = title;
    }

    if (body) {
      reviewToEdit.body = body;
    }

    await reviewToEdit.save();
    res.json(reviewToEdit);
  } catch (error) {
    res.status(500).json({ msg: "Server error for editReview" });
  }
};
