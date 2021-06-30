const { model, Schema } = require("mongoose");
const Reports = new Schema({
  data: {
    code: String,
    co2: Number,
    ch4: Number,
    n2o: Number,
    co2e: Number,
    stationary: Number,
    mobile: Number,
    energy: Number,
    total: Number,
    date: Date,
  },
});

module.exports = model("Reports", Reports);
