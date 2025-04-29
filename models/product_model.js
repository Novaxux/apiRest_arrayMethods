const crypto = require("crypto");
const pool = require("../config/db");

const selectAllProducts = async () => {
  const [result] = await pool.query("SELECT * FROM products ORDER BY name ASC");
  return result;
};
const selectProductById = async (id) => {
  const productId = id;
  const [product] = await pool.query(`SELECT * FROM products WHERE id = ?`, [
    productId,
  ]);
  return product;
};

const createProduct = async (_id, data) => {
  const productObject = { id: _id, ...data };

  await pool.query(
    `INSERT INTO products (id, name, price, stock) VALUES (?, ?, ?, ?)`,
    [
      productObject.id,
      productObject.name,
      productObject.price,
      productObject.stock,
    ]
  );
  return productObject;
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  const [result] = await pool.query(`DELETE FROM products WHERE id = ?`, [
    productId,
  ]);
  return result;
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
