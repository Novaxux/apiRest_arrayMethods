const ProductModel = require("../models/productRepository");

const crypto = require("crypto");
const pool = require("../config/db");

const getProducts = async (req, res) => {
  const result = await ProductModel.selectAll();
  res.json(result);
};
const getProductById = async (req, res) => {
  const product = await ProductModel.selectById(req.params.id);
  if (product.length === 0) {
    return res.status(404).send();
  }
  res.json(product[0]);
};

const createProduct = async (req, res) => {
  const productObject = await ProductModel.insert(
    crypto.randomUUID(),
    req.validatedData
  );
  res.status(201).send(productObject);
};

const deleteProduct = async (req, res) => {
  const result = await ProductModel.deleteById(req.params.id);
  if (result.affectedRows === 0) {
    return res.status(404).send();
  }
  res.status(200).send();
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.validatedData;
  const fields = Object.keys(data)
    .map((field) => `${field} = ?`)
    .join(", ");
  //implement this using zod
  if (Object.keys(data).length === 0) {
    return res.status(400).json({
      errors: {
        fieldErrors: [
          {
            general: ["No product changed"],
          },
        ],
      },
    });
  }
  const values = Object.values(data);
  const result = await ProductModel.update(req.params.id, fields, values);
  if (result.affectedRows === 0) {
    return res.status(404).send();
  }
  res.status(200).send();
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
