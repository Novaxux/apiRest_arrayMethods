const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const productSchema = require("../schemas/product.schema");
const validate = require("../middleware/validate");

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);
router.post(
  "/products",
  validate(productSchema),
  productsController.createProduct
);
router.delete("/products/:id", productsController.deleteProduct);
router.put(
  "/products/:id",
  validate(productSchema),
  productsController.updateProduct
);

module.exports = router;
