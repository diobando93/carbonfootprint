const express = require("express");
const router = express.Router();

const Reports = require("../../models/Reports");

//@route GET api/items
//@desc get all items
//@access Public

router.get("/", (req, res) => {
  Reports.find()
    //.sort({ date: -1 })
    .then((reports) => res.json(reports));
});

//@route POST api/items
//@desc create post
//@access Public

router.post("/", (req, res) => {
  const newReport = new Reports({
    data: req.body,
  });
  newReport.save().then((reports) => res.json(reports));
});

module.exports = router;
