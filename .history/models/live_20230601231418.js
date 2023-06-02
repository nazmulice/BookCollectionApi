
//Create a user schema using Mongoose with the following requirements:
//Name field: Required, string type, minimum length of 3 characters
//Email field: Required, unique, string type,
//Age field: Optional, number type, minimum value of 18
//Password field: Required, string type, minimum length of 6 characters
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Title must be required"],
    trim: true,
  },

  Email: {
    type: String,
    required: [true, "Title must be required"],
    trim: true,
  },

  Age: {
    type: String,
  },

  PublishedYear: {
    type: Number,
  },
});

//model create
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;




