const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

// router.get("/", productsController.getHome);
router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);
router.post("/products", productsController.createProduct);
router.delete("/products/:id", productsController.deleteProduct);
router.put("/products/:id", productsController.updateProduct);

module.exports = router;
