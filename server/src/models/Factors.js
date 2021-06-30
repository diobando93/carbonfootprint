const { model, Schema } = require("mongoose");

const Factors = new Schema({
  values: {
    name: String,
    class: String,
    global: String,
    hhv: Number,
    co: Number,
    ch: Number,
    no: Number,
    at: Number,
    ay: Number,
  },
});

module.exports = model("Factors", Factors);
