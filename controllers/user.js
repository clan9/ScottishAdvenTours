// Users controller
const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
