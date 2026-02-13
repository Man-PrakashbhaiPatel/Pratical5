const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Create Order
router.post("/", async (req, res, next) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
});

// Get Orders
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.find().populate("products.productId");
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
