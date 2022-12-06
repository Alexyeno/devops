var express = require("express");
var router = express.Router();

const { getUsers, createUser } = require("../controllers/userController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.route("/").get(getUsers).post(createUser);

module.exports = router;
