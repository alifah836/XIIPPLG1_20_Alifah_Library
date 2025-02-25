const db = require('../config/db'); // Mengimpor koneksi database dari file konfigurasi db

module.exports = {
  // 1. Menampilkan semua kategori
  getAllCategories: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM categories', [], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  // 2. Menampilkan kategori berdasarkan ID
  getCategoryById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  // 3. Menambahkan kategori baru
  addCategory: (name) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
        if (err) return reject(err);
        resolve(result.insertId);
      });
    });
  },

  // 4. Mengupdate kategori berdasarkan ID
  updateCategory: (id, name) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  // 5. Menghapus kategori berdasarkan ID
  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM categories WHERE id = ?', [id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },
};
