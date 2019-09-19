// Payments controller

const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const User = require("../models/User");

exports.makePayment = async (req, res) => {
  const { id, tourId, title, price, startDate, endDate, email } = req.body;

  try {
    // Process payment for tour
    let response = await stripe.charges.create({
      amount: price,
      currency: "GBP",
      description: title,
      source: id
    });

    // Update user model to add bookded tour
    const user = await User.findOne({ email });
    const tours = user.toursBooked;

    const newTour = {
      tourId,
      title,
      startDate,
      endDate
    };
    await tours.push(newTour);
    await user.save();

    res.json({ status: response.status });
  } catch (err) {
    console.log("ROUTE HANLDER ERROR: ", err);
    res.status(500).end();
  }
};
