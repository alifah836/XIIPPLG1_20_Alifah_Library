const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController'); // Import controller books

// Route untuk mendapatkan semua buku
router.get('/', categoriesController.getAllBooks);

// Route untuk mendapatkan buku berdasarkan ID
router.get('/:id', categoriesController.getBookById);

// Route untuk menambahkan buku baru
router.post('/', categoriesController.store);

// Route untuk memperbarui buku berdasarkan ID
router.put('/:id', categoriesController.update);

// Route untuk menghapus buku berdasarkan ID
router.delete('/:id', categoriesController.delete);

module.exports = router; // Mengekspor router agar bisa digunakan di file lain