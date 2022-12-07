const User = require("../models/userModel");
const Books = require("../models/books");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await Books.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false, msg: "can't reach data" });
  }
};

exports.createUser = async (req, res, next) => {
  console.log("je suis la");
  try {
    console.log(req.body);
    const user = await Books.create(req.body);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, msg: "can't post user" });
  }
};
