const express = require("express");
const helmet = require("helmet");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const paymentsRouter = require("./routes/payments");
const reviewsRouter = require("./routes/reviews");
const eventsRouter = require("./routes/events");

const app = express();

// connect to database
connectDB();

// setup middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup route handlers
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/events", eventsRouter);

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up on port: ${port}`);
});
