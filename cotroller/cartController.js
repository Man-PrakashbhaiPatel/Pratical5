const Cart = require("../models/Cart");

// CREATE Cart
exports.createCart = async (req, res) => {
  try {
    const cart = new Cart(req.body);
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET All Carts (with populate)
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate("user")
      .populate("products.product");
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};