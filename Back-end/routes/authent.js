const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create a user using: /api/authent/createUser => POST method
router.post(
  "/createUser",

  // check entered user validation
  [
    body("name", "Please enter a valid name").isLength({ min: 3 }),
    body("email", "Please enter a valid email address").isEmail(),
    body("password", "Please enter a password atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // if there are errors return Bad request & error msg
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email address exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User already exists with this email address!" });
      }

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.send(user);

      // console the occurs error
    } catch (error) {
      console.error(error.messsage);
      res.status(500).send("An error occured!");
    }
  }
);

module.exports = router;
