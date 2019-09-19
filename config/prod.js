module.exports = {
  mongoURI: process.env.MONGO_URI,
  secret: process.env.JWT_SECRET,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  ticketMasterKey: process.env.TM_API_KEY
};
