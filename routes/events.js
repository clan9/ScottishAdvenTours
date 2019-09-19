const express = require("express");
const EventsController = require("../controllers/events");

const router = express.Router();

//@route GET /api/events
//@desc GET list of events from ticketmaster api
//@access Public
router.use("/", EventsController.getEvents);

module.exports = router;
