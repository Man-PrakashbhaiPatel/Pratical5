const express = require("express");
const Cart = require("../model/model/cart");

const router = express.Router();

// Add to Cart
router.post("/", async (req, res, next) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    next(err);
  }
});

// Get Cart
router.get("/", async (req, res, next) => {
  try {
    const carts = await Cart.find().populate("products.productId");
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;