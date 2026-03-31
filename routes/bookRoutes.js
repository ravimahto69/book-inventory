const express = require('express');
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../dao/bookDAO');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) { 
    res.send.json({ error: 'Failed to fetch books' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const book = await getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});


module.exports = router;

