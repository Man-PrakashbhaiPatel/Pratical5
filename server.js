const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/Users"));
app.use("/cart", require("./routes/cart"));
app.use("/orders", require("./routes/order"));

// Error Handler
app.use(require("./middleware/errorhandler"));

// MongoDB Connection
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/practical6")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});