// const express = require('express');
// const Product = require('../models/Product');

// const router = express.Router();

// // Add Product (for farmers)
// router.post('/add', async (req, res) => {
//   const { name, quantity, price, category, farmerName } = req.body;

//   try {
//     const product = new Product({ name, quantity, price, category, farmerName });
//     await product.save();
//     res.status(201).json({ message: 'Product added successfully', product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get all products
// router.get('/all', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json({ products });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get products by category
// router.get('/:category', async (req, res) => {
//   const category = req.params.category;
//   try {
//     const products = await Product.find({ category: category });
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Update product
// router.put('/update/:id', async (req, res) => {
//   const { name, quantity, price, category, farmerName } = req.body;
//   const productId = req.params.id;

//   try {
//     const product = await Product.findByIdAndUpdate(
//       productId,
//       { name, quantity, price, category, farmerName },
//       { new: true }
//     );
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product updated successfully', product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete product
// router.delete('/delete/:id', async (req, res) => {
//   const productId = req.params.id;

//   try {
//     const product = await Product.findByIdAndDelete(productId);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.status(200).json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Add Product (for farmers) with image upload
router.post('/add', upload.single('productImage'), async (req, res) => {
  const { name, quantity, price, category, farmerName } = req.body;
  const productImage = req.file; // The uploaded file

  if (!productImage) {
    return res.status(400).json({ message: 'No image file uploaded' });
  }

  try {
    const product = new Product({
      name,
      quantity,
      price,
      category,
      farmerName,
      imageUrl: `/uploads/${productImage.filename}`, // Save the image URL
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
router.get('/all', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get products by category
router.get('/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ category: category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product
router.put('/update/:id', async (req, res) => {
  const { name, quantity, price, category, farmerName } = req.body;
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, quantity, price, category, farmerName },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product
router.delete('/delete/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
