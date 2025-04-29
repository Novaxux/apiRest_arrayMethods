const crypto = require("crypto");
const pool = require("../config/db");

const getProducts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM products ORDER BY name ASC");
  res.json(result);
};
const getProductById = async (req, res) => {
  const productId = req.params.id;
  const [product] = await pool.query(
    `SELECT * FROM products WHERE id = ?`,
    [productId]
  );
  if (product.length === 0) {
    return res.status(404).send();
  }
  res.json(product[0]);
};

const createProduct = async (req, res) => {
  const productObject = { id: crypto.randomUUID(), ...req.validatedData };

  await pool.query(
    `INSERT INTO products (id, name, price, stock) VALUES (?, ?, ?, ?)`,
    [
      productObject.id,
      productObject.name,
      productObject.price,
      productObject.stock,
    ]
  );
  res.status(201).send(productObject);
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const [result] = await pool.query(`DELETE FROM products WHERE id = ?`, [
    productId,
  ]);
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
  const [result] = await pool.query(
    `UPDATE products SET ${fields} WHERE id = ?`,
    [...values, id]
  );
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
