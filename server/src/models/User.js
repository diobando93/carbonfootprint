const { model, Schema } = require("mongoose");

const Users = new Schema({
  data: {
    code: String,
    company: String,
    ctype: String,
    name: String,
    lastname: String,
    position: String,
    rol: String,
    pais: String,
    ciudad: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = model("Users", Users);
