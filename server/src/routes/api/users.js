const express = require("express");
const router = express.Router();

const User = require("../../models/User");

//@route GET api/items
//@desc get all items
//@access Public

router.get("/", (req, res) => {
  User.find()
    //.sort({ date: -1 })
    .then((users) => res.json(users));
});

//@route POST api/items
//@desc create post
//@access Public

router.post("/", (req, res) => {
  const newUser = new User({
    data: req.body,
  });
  newUser.save().then((users) => res.json(users));
});

//@route DELETE api/items
//@desc delete a item
//@access Public

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((users) => users.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
