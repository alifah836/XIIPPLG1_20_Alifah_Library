const categoriesModel = require('../models/categoriesModel'); // Mengimpor model 'categoriesModel' yang berisi query database

module.exports = {
  // 1. Menampilkan semua kategori
  getAllCategories: (req, res) => {
    categoriesModel
      .getAllCategories()
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  // 2. Menampilkan kategori berdasarkan ID
  getCategoryById: (req, res) => {
    const { id } = req.params;

    categoriesModel
      .getCategoryById(id)
      .then((results) => {
        if (results.length === 0) {
          return res.status(404).json({ message: 'Category not found' });
        }
        res.json(results[0]);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  // 3. Menambahkan kategori baru
  store: (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    categoriesModel
      .addCategory(name)
      .then((insertId) => {
        res.json({ id: insertId, name });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  // 4. Mengupdate kategori berdasarkan ID
  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    categoriesModel
      .updateCategory(id, name)
      .then((result) => {
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category updated successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  // 5. Menghapus kategori berdasarkan ID
  delete: (req, res) => {
    const { id } = req.params;

    categoriesModel
      .deleteCategory(id)
      .then((result) => {
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },
};
