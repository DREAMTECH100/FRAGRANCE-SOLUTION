const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

// ---------------- Multer setup ----------------
// Save uploads in ./uploads folder with unique filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// ---------------- Routes ----------------

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("GET PRODUCTS ERROR:", err);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// UPLOAD PRODUCT IMAGE
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    // Return the URL to the frontend
    res.json({ url: `/uploads/${req.file.filename}` });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ message: "Error uploading image" });
  }
});

// ADD PRODUCT
router.post("/add", async (req, res) => {
  try {
    console.log("Incoming product:", req.body);

    const product = new Product(req.body);
    await product.save();

    res.json(product);
  } catch (error) {
    console.error("PRODUCT SAVE ERROR:", error);
    res.status(500).json({ message: "Error adding product" });
  }
});

// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("DELETE PRODUCT ERROR:", err);
    res.status(500).json({ message: "Error deleting product" });
  }
});

module.exports = router;