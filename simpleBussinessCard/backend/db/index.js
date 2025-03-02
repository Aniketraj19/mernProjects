const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aniketraj19verma:Bm1R6aGA9AkAC2dw@cluster0.vikfe.mongodb.net/bussinessCard"
);

const schema = mongoose.Schema({
  name: String,
  description: String,
  interests: Array,
});

const Cards = mongoose.model("Cards", schema);

module.exports = { Cards };
