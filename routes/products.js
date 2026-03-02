const express = require("express");
const { body } = require("express-validator");
const Product = require("../model/model/product");
const validate = require("../middleware/validate");

const router = express.Router();

// Create Product
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name required"),
    body("price").isNumeric().withMessage("Price must be number"),
    body("stock").isNumeric().withMessage("Stock must be number")
  ],
  validate,
  async (req, res, next) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  }
);

// Get All Products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;