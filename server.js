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
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
