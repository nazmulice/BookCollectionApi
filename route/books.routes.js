const express= require('express');
const router = express.Router();

const {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/book.controller");

// Retrieve all books
router.get("/", getAll);

//Retrieve a specific book by ID
router.get("/:id", getSingle);

//Create a new book
router.post("/", createBook);

//Update a book by ID
router.put("/:id", updateBook);

//delete a book by ID
router.delete("/:id", deleteBook);


module.exports = router;

