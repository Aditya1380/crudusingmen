const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.routes.js");

const app = express();
const PORT = 8085;
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.send("Hi checking Server! hi there");
// });

// Rest Points
app.use("/api/products", ProductRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/BackendCRUD")
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
