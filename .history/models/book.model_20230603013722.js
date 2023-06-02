const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title must be required"],
      trim: true,
    },

    author: {
      type: String,
      required: [true, "Title must be required"],
      trim: true,
    },

    description: {
      type: String,
    },

    PublishedYear: {
      type: Number,
    },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

//model create
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


