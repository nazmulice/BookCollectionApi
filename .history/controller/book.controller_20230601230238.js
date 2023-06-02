const Book = require("../models/book.model");

const getAll = async (req, res) => {
  try {
    const getBook = await Book.find();
    res.send(getBook);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const getSingle = await Book.findOne(req.params._id);
    res.send(getSingle);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await new Book(req.body);
    newBook.save();
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const updateBook = async (req, res) => {
  try {
      const { title, author, description, PublishedYear } = req.body;
      const { id } = req.params;
    const update = await Book.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          author,
          description,
          PublishedYear,
        },
      }
    );

     res.status(200).json({
       success: true,
       message: "single book update done",
       Data: update,
     });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete({ _id: id });
    res.send("delete successfully");
  } catch (error) {
        res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createBook,
  updateBook,
  deleteBook,
};
