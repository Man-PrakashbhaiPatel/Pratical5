const Order = require("../models/Order");

// CREATE Order
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET All Orders (with populate)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("products.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET Order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("products.product");

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Order
exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};