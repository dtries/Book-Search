const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  image: String ,
  publisher: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;